import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UserService } from '../../../../../core/services/user/user.service'
import { WorkareaService } from '../workarea.service'
import { NavService } from '../nav/nav.service'
import { Activity } from './../models/activity.model'
import { CompletionStatsService } from './../../../../../core/services/user/completion-stats.service'
import { ConfigService } from '../../../../../core/services/config/config.service'
import { DndService } from './../activities/dnd/dnd.service'
import { ClickRotateService } from '../activities/click-rotate/click-rotate.service'

@Injectable({
  providedIn: 'root'
})
export class ActiveModeService {

  activityForm
  saving = false

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    public user: UserService,
    private workareaService: WorkareaService,
    private navService: NavService,
    private completionStatsService: CompletionStatsService,
    private dndService: DndService,
    private clickRotateService: ClickRotateService
  ) { }

  extractAnswers() {
    // We need to do a bit of work to get answers from certain activity types
    // This is where this work gets done
    let extractedAnswer: any

    if (
      this.lastActivityInSet.meta.type === 'checkbox'
    ||this.lastActivityInSet.meta.type === 'click'
    ) {
      extractedAnswer = this.extractOnlySelectedOptions()
    }
    else if (
      this.lastActivityInSet.meta.type === 'dnd'
    ||this.lastActivityInSet.meta.type === 'dnd-match'
    ) {
      extractedAnswer = this.dndExtract(this.workareaService.activities)
    }
    else if (this.lastActivityInSet.meta.type === 'click2') {
      extractedAnswer = JSON.stringify(this.clickRotateService.userSelections)
    }
    else if (this.lastActivityInSet.meta.type === 'radio') {
      extractedAnswer = [this.activityForm.value.answer]
    } else if (
      this.lastActivityInSet.meta.type === 'text'
    ||this.lastActivityInSet.meta.type === 'textarea'
    ) {
      extractedAnswer = this.activityForm.value.answer
    } else {
      extractedAnswer = 42 // info and custom types
    }

    return extractedAnswer

  }

  userAnswerPOST(user_answers) {
    this.httpClient.post(
      `${this.configService.params.api.v1.path}/webcourse/activities/index.php?id=${this.lastActivityInSet.meta.aid}`, user_answers
    ).subscribe(
      (activity_supplemental) => {
        this.completionStatsService.bumpStats(this.lastActivityInSet)
        this.navService.navDisable(false)

        if (activity_supplemental['after_word']) {
          this.lastActivityInSet.body.after_word = activity_supplemental['after_word']
        }

        if (activity_supplemental['answers']) {
          this.lastActivityInSet.answers = activity_supplemental['answers']
        }

        if (user_answers) {
          this.lastActivityInSet.user_answers = user_answers

          if (this.lastActivityInSet.meta.type === 'dnd' || this.lastActivityInSet.meta.type === 'dnd-match') {
            this.dndService.showUserOrder(this.lastActivityInSet)
          } else {
            // Loop through last activity answers
            for (let i = 0; i < this.lastActivityInSet.answers.length; i++) {
              // Loop through user answers
              for (let j = 0; j < user_answers.length; j++) {
                if (this.lastActivityInSet.answers[i].answer_id === user_answers[j]) {
                  this.lastActivityInSet.answers[i].selected = true
                }
              }
            }
          }
        }

        // Afterword, correct answers, etc might be returned when saving user answers
        // If they do, merge them back into the activities object
        // this.workareaService.activities[this.workareaService.activities.length - 1] = {
        //   ...this.workareaService.activities[this.workareaService.activities.length - 1], ...activity_supplemental
        // }

      },
      (err) => { console.log('ERROR #2334.') }
    )
  }

  extractOnlySelectedOptions() {
    // Reduces all checkbox options to IDs of selected ones only.
    const answers = this.lastActivityInSet.answers
      .reduce(
        (selected, id) => {
          if (id.selected) {
            selected.push(id.answer_id)
          }
          return selected
        }, []
      )
    return answers
  }

  dndExtract(activities: Activity[]) {
    let extractedAnswer = []
    // Loop through activity answers, build array of AIDs only, in user selected order
    activities[this.workareaService.activities.length - 1].answers.forEach(answer => {
      extractedAnswer.push(answer.answer_id)
    })
    return extractedAnswer
  }

  get lastActivityInSet() {
    return <Activity>this.workareaService.activities[
      this.workareaService.activities.length - 1
    ]
  }
}

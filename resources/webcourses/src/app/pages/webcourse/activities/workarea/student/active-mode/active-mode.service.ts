import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { FormGroup } from '@angular/forms'

// WNGX services
import { UserService } from 'src/app/core/services/user/user.service'
import { CompletionStatsService } from 'src/app/core/services/user/completion-stats.service'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { DndService } from 'src/app/pages/webcourse/activities/workarea/activities/dnd/dnd.service'
import { ClickRotateService } from 'src/app/pages/webcourse/activities/workarea/activities/click-rotate/click-rotate.service'
import { ActivitiesService } from 'src/app/pages/webcourse/activities/activities.service'

// WNGX models and misc
import { Activity } from 'src/app/pages/webcourse/activities/workarea/models/activity.model'

@Injectable({
  providedIn: 'root'
})
export class ActiveModeService {

  public activityForm: FormGroup
  saving = false

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    public user: UserService,
    private completionStatsService: CompletionStatsService,
    private dndService: DndService,
    private clickRotateService: ClickRotateService,
    private activitiesService: ActivitiesService
  ) { }

  extractAnswers() {
    // We need to do a bit of work to get answers from certain activity types
    // This is where this work gets done
    let extractedAnswer: any
    let activityType = this.lastActivityInSet.meta.activity_type

    if (activityType === 'checkbox' || activityType === 'click') {
      extractedAnswer = this.extractOnlySelectedOptions()
    } else if (activityType === 'dnd' || activityType === 'dnd-match') {
      extractedAnswer = this.dndExtract(this.activitiesService.activities)
    } else if (activityType === 'click2') {
      extractedAnswer = JSON.stringify(this.clickRotateService.userSelections)
    } else if (activityType === 'radio') {
      extractedAnswer = [this.activityForm.value.answer]
    } else if (activityType === 'text' || activityType === 'textarea') {
      extractedAnswer = { "answer": this.activityForm.value.answer }
    } else {
      extractedAnswer = JSON.stringify(42) // info and custom types
    }

    return extractedAnswer

  }

  userAnswerPOST(user_answers) {
    this.httpClient.post(
      `${this.configService.params.api.route}/webcourse/activities/${this.lastActivityInSet.meta.activity_id}/user_answer`, user_answers
    ).subscribe(
      (activity_supplemental) => {
        this.completionStatsService.totalActivitiesCompleted++
        this.activitiesService.waitingForApi = false

        if (activity_supplemental['after_word']) {
          this.lastActivityInSet.after_word = activity_supplemental['after_word']
        }

        if (activity_supplemental['answers']) {
          this.lastActivityInSet.answers = activity_supplemental['answers']
        }

        if (user_answers) {
          this.lastActivityInSet.user_answers = user_answers

          if (this.lastActivityInSet.meta.activity_type === 'dnd' || this.lastActivityInSet.meta.activity_type === 'dnd-match') {
            this.dndService.showUserOrder(this.lastActivityInSet)
          } else {
            // Loop through last activity answers
            for (let i = 0; i < this.lastActivityInSet.answers.length; i++) {
              // Loop through user answers
              for (let j = 0; j < user_answers.length; j++) {
                if (this.lastActivityInSet.answers[i].id === user_answers[j]) {
                  this.lastActivityInSet.answers[i].selected = true
                }
              }
            }
          }
        }

        // Afterword, correct answers, etc might be returned when saving user answers
        // If they do, merge them back into the activities object
        this.activitiesService.activities[this.activitiesService.activities.length - 1] = {
          ...this.activitiesService.activities[this.activitiesService.activities.length - 1], ...activity_supplemental
        }

      },
      (err) => {
        console.log('ERROR #2334.')
        this.activitiesService.waitingForApi = false
      }
    )
  }

  extractOnlySelectedOptions() {
    // Reduces all checkbox options to IDs of selected ones only.
    const answers = this.lastActivityInSet.answers
      .reduce(
        (selected, id) => {
          if (id.selected) {
            selected.push(id.id)
          }
          return selected
        }, []
      )
    return answers
  }

  dndExtract(activities: Activity[]) {
    let extractedAnswer = []
    // Loop through activity answers, build array of AIDs only, in user selected order
    activities[this.activitiesService.activities.length - 1].answers.forEach(answer => {
      extractedAnswer.push(answer.id)
    })
    return extractedAnswer
  }

  get lastActivityInSet() {
    return <Activity>this.activitiesService.activities[
      this.activitiesService.activities.length - 1
    ]
  }
}

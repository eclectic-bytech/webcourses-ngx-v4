import { Component, OnInit, Input } from '@angular/core'
import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'
import { ActivityAnswers } from '../../models/activity-answers.model'
import { Activity } from '../../models/activity.model'
import { ClickRotateService } from './click-rotate.service'

@Component({
  selector: 'app-click-rotate',
  templateUrl: './click-rotate.component.html',
  styleUrls: ['./click-rotate.component.scss'],
  animations: [FadeInOut]
})
export class ClickRotateComponent implements OnInit {

  @Input() activity: Activity
  rotateItems = []
  periodId: number
  public colours: string
  showMarkingType = "user"

  constructor(
    public clickRotateService: ClickRotateService
  ) {}

  ngOnInit(): void {
    this.clickRotateService.userSelections = (this.activity.user_answers) ? this.activity.user_answers : {}
    this.rotateItems = JSON.parse(this.activity.body.assess_text)
    // set id where puctuation mark is a period. used for setting text-capitalize class.
    for (let y in this.rotateItems) {
      if (this.rotateItems[y] === '.') {
        this.periodId = parseInt(y)
      }
    }
  }

  updateSelections(i, aid) {
    if (this.clickRotateService.userSelections[aid]) {
      if (this.clickRotateService.userSelections[aid] == Object.keys(this.rotateItems).length) {
        delete this.clickRotateService.userSelections[aid]
        this.activity.answers[i].selected = false
      } else {
        this.clickRotateService.userSelections[aid]++
      }
    } else {
      this.clickRotateService.userSelections[aid] = 1
      this.activity.answers[i].selected = true
    }
  }

  showLabel(option: ActivityAnswers) {
    if (this.showMarkingType === 'user') {
      return (this.clickRotateService.userSelections[option.answer_id])
        ? option.caption + this.rotateItems[this.clickRotateService.userSelections[option.answer_id]]
        : option.caption
    } else {
      return (option.correct === 0) ? option.caption : option.caption + this.rotateItems[option.correct]
    }
  }

  checkIfCapsNeeded(i: number) {
    if (i === 0) {
      return false
    } else {
      let previousAnswer: ActivityAnswers = this.activity.answers[--i]
      if (this.activity.user_answers) {
        return (previousAnswer.correct === this.periodId) ? true : false
      } else {
        return (
          this.clickRotateService.userSelections[previousAnswer.answer_id] &&
          this.clickRotateService.userSelections[previousAnswer.answer_id] === this.periodId
        ) ? true : false
      }
    }
  }

  markColours(answer: ActivityAnswers) {
    if (this.showMarkingType === 'user') {
      if (answer.correct !== 0 && !this.clickRotateService.userSelections[answer.answer_id]) {
        this.colours = 'clickMissed'
      } else if (answer.correct !==0 && this.clickRotateService.userSelections[answer.answer_id] == answer.correct) {
        this.colours = 'clickCorrect'
      } else if (
        answer.correct !==0 && this.clickRotateService.userSelections[answer.answer_id] != answer.correct
      ||answer.correct ===0 && this.clickRotateService.userSelections[answer.answer_id]
      ) {
        this.colours = 'clickWrong'
      } else {
        this.colours = 'clickFalse'
      }
    } else if (this.showMarkingType === 'correct') {
      this.colours = (answer.correct !== 0) ? 'clickCorrect' : 'clickFalse'
    }
    return this.colours
  }

  showMarking(type: string) {
    this.showMarkingType = (type === 'user') ? 'user' : 'correct'
  }
}

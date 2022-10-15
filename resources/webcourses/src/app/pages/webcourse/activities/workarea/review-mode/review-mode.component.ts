import { Component, OnInit, Input } from '@angular/core'
import { Activity } from './../models/activity.model'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FadeInOut } from '../../../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-review-mode',
  templateUrl: './review-mode.component.html',
  styleUrls: ['./review-mode.component.scss'],
  animations: [FadeInOut]
})
export class ReviewModeComponent implements OnInit {

  @Input() activity: Activity

  faTimes = faTimes
  faCheck = faCheck

  public colours: string

  constructor() { }

  ngOnInit() {
  }

  markColours(option) {

    if (option.selected && option.correct === 1) {
      this.colours = 'clickCorrect'
    } else if (option.selected && option.correct === 0) {
      this.colours = 'clickWrong'
    } else if (!option.selected && option.correct === 1) {
      this.colours = 'clickMissed'
    } else {
      this.colours = 'clickFalse'
    }

    return this.colours

  }

}

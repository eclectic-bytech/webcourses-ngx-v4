import { Component, Input } from '@angular/core'
import { Activity } from 'src/app/pages/webcourse/activities/workarea/models/activity.model'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-review-mode',
  templateUrl: './review-mode.component.html',
  styleUrls: ['./review-mode.component.scss'],
  animations: [FadeInOut]
})
export class ReviewModeComponent {

  @Input() activity: Activity

  faTimes = faTimes
  faCheck = faCheck

  public colours: string

  constructor() { }

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

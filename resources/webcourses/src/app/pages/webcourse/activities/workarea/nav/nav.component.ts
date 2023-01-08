import { Component } from '@angular/core'
import { faStepBackward, faSpinner, faCheck, faPencilAlt, faStepForward } from '@fortawesome/free-solid-svg-icons'

// WNGX services
import { NavService } from './nav.service'
import { ActiveModeService } from '../active-mode/active-mode.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})

export class NavComponent {

  // FontAwesome icons
  faStepBackward = faStepBackward
  faCheck = faCheck
  faPencilAlt = faPencilAlt
  faSpinner = faSpinner
  faStepForward = faStepForward

  constructor(
    public navService: NavService,
    public activeModeService: ActiveModeService,
    public selectedCourseService: SelectedCourseService
  ) { }

  SaveButton() {
    this.navService.navDisable(true)
    this.activeModeService.userAnswerPOST(
      this.activeModeService.extractAnswers()
    )
  }

  GoToActivity(offset: number) {
    // Offset should be 1 for next activity, -1 for previous activity
    this.navService.navDisable(true)
    this.navService.calcFollowingAid(offset)
  }

}

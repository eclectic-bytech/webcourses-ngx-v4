import { Component } from '@angular/core'
import { faPrint, faSpinner } from '@fortawesome/free-solid-svg-icons'

// WNGX services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { ActivitiesService } from '../activities.service'

//WNGX models and misc
import { FadeInOut } from './../../../../core/animations/fade-in-out.animation'


@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
  animations: [FadeInOut]
})

export class WorkAreaComponent {

  public faPrint = faPrint
  public faSpinner = faSpinner

  constructor(
    public selectedCourseService: SelectedCourseService,
    public userService: UserService,
    public activitiesService: ActivitiesService
  ) {}

  printButton() {
    window.print()
  }
}

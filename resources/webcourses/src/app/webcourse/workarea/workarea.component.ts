import { Component } from '@angular/core'

// WNGX services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { WebcourseService } from 'src/app/webcourse/webcourse.service'

//WNGX models and misc
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'


@Component({
  selector: 'wngx-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
  animations: [FadeInOut]
})

export class WorkAreaComponent {

  constructor(
    public selectedCourseService: SelectedCourseService,
    public userService: UserService,
    public webcourseService: WebcourseService
  ) {}

}

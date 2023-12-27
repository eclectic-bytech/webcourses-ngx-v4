import { Component } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

// WNGX imports
import { WebcourseService } from 'src/app/webcourse/webcourse.service'

@Component({
  selector: 'wngx-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./../menu.component.scss'],
  animations: [FadeInOut]
})
export class StudentMenuComponent {

  constructor(
    public webcourseService: WebcourseService
  ) {}

}

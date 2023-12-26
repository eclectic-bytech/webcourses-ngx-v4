import { Component } from '@angular/core'

// WNGX imports
import { WebcourseService } from 'src/app/webcourse/webcourse.service'

@Component({
  selector: 'wngx-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./../menu.component.scss']
})
export class StudentMenuComponent {

  constructor(
    public webcourseService: WebcourseService
  ) {}

}

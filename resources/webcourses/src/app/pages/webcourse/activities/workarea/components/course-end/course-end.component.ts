import { Component } from '@angular/core'

// WNGX models and misc
import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-course-end',
  templateUrl: './course-end.component.html',
  styleUrls: ['./course-end.component.scss'],
  animations: [FadeInOut]
})
export class CourseEndComponent {

  constructor() { }

}

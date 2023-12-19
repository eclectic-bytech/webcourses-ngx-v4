import { Component, Input } from '@angular/core'

@Component({
  selector: 'wngx-enter-course',
  templateUrl: './enter-course.component.html',
  styleUrls: ['./enter-course.component.scss']
})
export class EnterCourseComponent {
  @Input() course: any

}

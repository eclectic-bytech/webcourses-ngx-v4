import { Component, Input } from '@angular/core'

@Component({
  selector: 'wngx-enter-course',
  templateUrl: './enter-course.component.html',
  styleUrls: ['./enter-course.component.scss']
})
export class EnterCourseComponent {
  @Input() course: any
  @Input() buttonStyle: string = 'raised'
  @Input() public btnSize: string

  buttonName() {
    if (this.course.user_progress.total_activities_completed === 0) {
      return 'Start'
    } else if (this.course.user_progress.total_activities_completed === this.course.total_activities) {
      return 'Review'
    } else {
      return 'Continue'
    }
  }
}

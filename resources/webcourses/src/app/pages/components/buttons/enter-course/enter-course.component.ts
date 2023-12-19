import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'wngx-enter-course',
  templateUrl: './enter-course.component.html',
  styleUrls: ['./enter-course.component.scss']
})
export class EnterCourseComponent implements OnInit {
  @Input() course: any
  @Input() buttonStyle: string = 'raised'
  buttonToDisplay: 'Start' | 'Enter' | 'Resume'

  ngOnInit() {
    this.displayedButton()
  }

  displayedButton() {
    if (this.course.user_progress.total_activities_completed === 0) {
      this.buttonToDisplay = 'Start'
    } else if (this.course.user_progress.total_activities_completed === this.course.total_activities) {
      this.buttonToDisplay = 'Enter'
    } else {
      this.buttonToDisplay = 'Resume'
    }
  }
}

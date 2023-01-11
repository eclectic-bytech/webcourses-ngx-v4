import { Component } from '@angular/core'

// WNGX services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { WorkareaService } from '../../workarea.service'

// WNGX models and misc
import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-course-end',
  templateUrl: './course-end.component.html',
  styleUrls: ['./course-end.component.scss'],
  animations: [FadeInOut]
})
export class CourseEndComponent {

  constructor(
    public selectedCourseService: SelectedCourseService,
    private workareaService: WorkareaService
  ) { }

  reviewButton(aid) {
    this.workareaService.loadActivities(aid)
    this.workareaService.endOfCourse = false
  }
}

import { Component } from '@angular/core'
import { Location } from '@angular/common'

import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { WorkareaService } from '../../workarea.service'
import { NavService } from '../../nav/nav.service'

@Component({
  selector: 'app-course-end',
  templateUrl: './course-end.component.html',
  styleUrls: ['./course-end.component.scss'],
  animations: [FadeInOut]
})
export class CourseEndComponent {

  constructor(
    public selectedCourseService: SelectedCourseService,
    private location: Location,
    private workareaService: WorkareaService
  ) { }

  reviewButton(aid) {
    this.workareaService.loadActivities(aid)
    this.workareaService.endOfCourse = this.workareaService.endOfChapter = false
    // this.location.go(`/webcourse/activities/${firstChapter.syllabus[0].activity_id}`)
  }
}

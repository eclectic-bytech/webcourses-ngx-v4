import { Component } from '@angular/core'
import { Location } from '@angular/common'

import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { Chapter } from '../../../models/chapter.model'

@Component({
  selector: 'app-course-end',
  templateUrl: './course-end.component.html',
  styleUrls: ['./course-end.component.scss'],
  animations: [FadeInOut]
})
export class CourseEndComponent {

  constructor(
    public selectedCourseService: SelectedCourseService,
    private location: Location
  ) { }

  reviewButton(firstChapter: Chapter) {
    this.location.go(`/webcourse/activities/${firstChapter.syllabus[0].meta.activity_id}`)
  }
}

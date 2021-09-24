import { Injectable } from '@angular/core'
import { WorkareaService } from 'src/app/pages/webcourse/activities/workarea/workarea.service'
import { CourseService } from 'src/app/pages/catalogue/course/course.service'

import { Course } from 'src/app/models/course.model'
import { Chapter } from 'src/app/pages/webcourse/activities/models/chapter.model'
import { Activity } from 'src/app/pages/webcourse/activities/workarea/models/activity.model'

@Injectable({
  providedIn: 'root'
})
export class SelectedCourseService {

  public selectedCourse: Course
  public selectedChapter: Chapter

  constructor(
    private workareaService: WorkareaService,
    private courseService: CourseService
  ) { }

  servicePrimer() {
    this.workareaService.currentActivity$.subscribe(
      (activity: Activity) => {
        this.courseService.getCourse(activity.meta.course_id).subscribe(
          (course: Course) => {
            this.selectedCourse = course
          }
        )
      }
    )
  }

}

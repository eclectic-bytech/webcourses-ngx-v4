import { Injectable } from '@angular/core'
import { WorkareaService } from 'src/app/pages/webcourse/activities/workarea/workarea.service'
import { CourseService } from 'src/app/pages/catalogue/course/course.service'
import { ChapterService } from '../webcourse/chapter/chapter.service'

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
    private courseService: CourseService,
    private chapterService: ChapterService
    ) { }

    servicePrimer() {
      this.workareaService.currentActivity$.subscribe(
        (activity: Activity) => {
          this.courseService.getCourse(activity.meta.course_id).subscribe(
            (course: Course) => {
              this.selectedCourse = course
            }
            )
            this.chapterService.getChapter(activity.meta.chapter_id).subscribe(
              (chapter: Chapter) => {
                this.selectedChapter = chapter
                this.selectedChapter.total_activities = this.selectedChapter.syllabus.length
          }
        )
      }
    )
  }

}

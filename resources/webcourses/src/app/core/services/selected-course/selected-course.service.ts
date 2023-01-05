import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

// WNGX Services
import { WorkareaService } from 'src/app/pages/webcourse/activities/workarea/workarea.service'
import { CourseService } from 'src/app/pages/catalogue/course/course.service'
import { ChapterIndexService } from 'src/app/pages/webcourse/activities/sidebar/chapter-index/chapter-index.service'

// WNGX models abd misc
import { Activity } from 'src/app/pages/webcourse/activities/workarea/models/activity.model'
import { ActivityMeta } from 'src/app/pages/webcourse/activities/workarea/models/activity-meta.model'
import { Chapter } from 'src/app/pages/webcourse/activities/models/chapter.model'
import { Course } from 'src/app/models/course.model'

@Injectable({
  providedIn: 'root'
})
export class SelectedCourseService {

  // Activities can be bookmarked: selected course & chapter follow activity loading
  public selectedActivitySet$ = new BehaviorSubject<Activity[] | null>(null)
  public selectedChapter$ = new BehaviorSubject<Chapter | null>(null)
  public selectedChapterIndex$ = new BehaviorSubject<Chapter[] | null>(null)
  public selectedCourse$ = new BehaviorSubject<Course | null>(null)

  public nextChapter$ = new BehaviorSubject<Chapter | null>(null)
  public previousChapter$ = new BehaviorSubject<Chapter | null>(null)

  constructor(
    private workareaService: WorkareaService,
    private chapterIndexService: ChapterIndexService,
    private courseService: CourseService
  ) { }

  servicePrimer() {
    this.workareaService.currentActivitySet$.subscribe(
      (activities: Activity[]) => {
        if (activities) {
          this.selectedActivitySet$.next(activities)
          this.courseService.getCourse(activities[0].meta.course_id).subscribe(
            (course: Course) => {
              this.selectedCourse$.next(course) }
          )
          this.chapterIndexService.getChapterIndex(activities[0].meta.course_id).subscribe(
            (chapters: Chapter[]) => {
              this.selectedChapterIndex$.next(chapters)
              this.setChapters(chapters, activities[0].meta)
            }
          )
        }
      }
    )
  }

  setChapters(chapters: Chapter[], activityMeta: ActivityMeta) {
    let chapterIndex = chapters.findIndex( chapter => {
      return chapter.id === activityMeta.chapter_id
    })
    this.selectedChapter$.next(chapters[chapterIndex])
    this.nextChapter$.next(chapters[++chapterIndex])
    this.previousChapter$.next(chapters[--chapterIndex])
  }

}

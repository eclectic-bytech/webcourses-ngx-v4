import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

// WNGX services
import { CourseService } from 'src/app/pages/catalogue/course/course.service'
import { ChapterIndexService } from 'src/app/pages/webcourse/activities/sidebar/chapter-index/chapter-index.service'

// WNGX models and misc
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

  public selectedActivitySet: Activity[]
  public selectedCourse: Course
  public courseSyllabus: ActivityMeta[] = [] // only used in next/prev activity nav

  constructor(
    private chapterIndexService: ChapterIndexService,
    private courseService: CourseService
  ) { }

  fullCourseLoader(activity: Activity) {
    console.log('Full course loader fired.')
    this.courseService.getCourse(activity.meta.course_id).subscribe(
      (course: Course) => {
        this.selectedCourse$.next(course)
        this.selectedCourse = course
      }
    )

    this.chapterIndexService.getChapterIndex(activity.meta.course_id).subscribe(
      (chapters: Chapter[]) => {
        this.selectedChapterIndex$.next(chapters)
        this.setChapters(chapters, activity.meta)

        chapters.forEach( (chapter: Chapter) => {
          this.courseSyllabus = this.courseSyllabus.concat(chapter.syllabus)
        })
      }
    )
  }

  setChapters(chapters: Chapter[], activityMeta: ActivityMeta) {
    let chapterIndex = chapters.findIndex( chapter => {
      return chapter.id === activityMeta.chapter_id
    })
    this.selectedChapter$.next(chapters[chapterIndex])

    let nextChapter = (chapters.length >= chapterIndex) ? chapters[++chapterIndex] : null
    this.nextChapter$.next(nextChapter)

    let previousChapter = (chapterIndex > 1) ? (chapters[--chapterIndex]) : null
    this.previousChapter$.next(previousChapter)
  }

}

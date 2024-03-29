import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { forkJoin } from 'rxjs'

// WNGX services
import { ConfigService } from 'src/app/core/services/config/config.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { CourseChapterIndexService } from 'src/app/core/services/course-chapter-index/course-chapter-index.service'
import { CourseService } from 'src/app/catalogue/course/course.service'
import { CompletionStatsService } from 'src/app/core/services/user/completion-stats.service'
import { ThemeService } from 'src/app/views/theme/theme.service'

// WNGX models and misc
import { Activity } from './models/activity.model'
import { ActivityMeta } from './models/activity-meta.model'
import { Chapter } from './models/chapter.model'

@Injectable({
  providedIn: 'root'
})
export class WebcourseService {

  public showSideMenu = true
  public waitingForApi = false
  public endOfChapter = false
  public endOfCourse = false

  public activities: Activity[]

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private selectedCourseService: SelectedCourseService,
    private courseChapterIndexService: CourseChapterIndexService,
    private courseService: CourseService,
    private completionStatsService: CompletionStatsService,
    private themeService: ThemeService) { }

  loadActivities(aid) {
    this.getActivities(aid).subscribe(
      (activitySet: Activity[]) => {
        this.propagateActivities(activitySet)
      }
    )
  }

  propagateActivities(activitySet: Activity[]) {
    console.log('Propagate activities.')
    this.selectedCourseService.selectedActivitySet$.next(activitySet)

    if (activitySet.length === 1) {
      if (activitySet[0].meta.cont) {
        this.activities = this.activities.concat(activitySet)
      } else {
        this.activities = activitySet
      }

    } else {
      if (!this.activities) {
        this.activities = activitySet
      } else {
        this.hackAroundBackendLimitation(activitySet)
      }
    }
    this.endOfChapter = false
    this.endOfCourse = false
    this.waitingForApi = false
  }

  bootstrapCourse(activitySet: Activity[]) {
    forkJoin([
      this.courseService.getCourse(activitySet[0].meta.course_id),
      this.courseChapterIndexService.getChapterIndex(activitySet[0].meta.course_id)
    ]).subscribe(
      results => {
        this.themeService.activePublisher$.next(results[0].publisher)

        this.selectedCourseService.selectedCourse = results[0]
        this.courseChapterIndexService.selectedCourseChapters = results[1]
        this.selectedCourseService.courseSyllabus = this.generateCourseSyllabus(results[1])

        this.courseChapterIndexService.setChapters()

        // These shouldn't be here
        this.completionStatsService.totalActivitiesCompleted = results[0].user_progress.total_activities_completed
      }
    )
  }

  generateCourseSyllabus(courseChapters: Chapter[]) {
    let courseSyllabus: ActivityMeta[] = []
    courseChapters.forEach((chapter: Chapter) => {
      courseSyllabus = courseSyllabus.concat(chapter.syllabus)
    })
    return courseSyllabus
  }

  getActivities(aid: any) {
    return this.httpClient
      .get<Activity[]>(
        `${this.configService.params.api.route}/webcourse/activities/${aid}`
      ).pipe(activities => activities)
  }

  hackAroundBackendLimitation(activities: Activity[]) {
    /*  On a GET, backend always sends a complete sequence of activities. This works,
        makes some things easier, but makes proper animations difficult:

        Clicking Next in active mode results in _all_ activities fading out, then back in,
        with next activity added. To avoid that, we check if there are existing activities
        to avoid overwriting them causing additional, undesired fades. */
    if (this.activities[0].meta.activity_id === activities[0].meta.activity_id) {

      // Length comparison fixes last activity getting re-added when an activity
      // progress bar in the same activity set is clicked (issue #161)
      if (this.activities.length != activities.length) {
        this.activities.push(activities[activities.length - 1])
        setTimeout(() => {
          let scrollLocation = `activity${activities[activities.length - 1].meta.activity_id}`
          const element = document.getElementById(scrollLocation);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      }

    } else {
      this.activities = activities
    }
  }

}

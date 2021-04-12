import { Injectable } from '@angular/core'
import { ActivitiesService } from '../../activities.service'
import { Activity } from '../../workarea/models/activity.model'
import { Chapter } from '../../models/chapter.model'
import { Course } from '../../../../../models/course.model'
import { UserService } from '../../../../../core/services/user/user.service'
import { CompletionStatsService } from '../../../../../core/services/user/completion-stats.service'

@Injectable({
  providedIn: 'root'
})
export class SelectedService {

  selectedChapter: Chapter
  selectedCourse: Course

  constructor(
    private completionStatsService: CompletionStatsService,
    private activitiesService: ActivitiesService,
    private userService: UserService
  ) {}

  updateSelected(currentActivity: Activity) {
    this.updateSelectedChapter(currentActivity)
    this.updateSelectedCourse(currentActivity)
  }

  updateSelectedChapter(currentActivity: Activity) {
    this.activitiesService.chapterIndex$.subscribe(
      (chapters: Chapter[]) => {
        this.selectedChapter = this.getSelectedChapter(chapters, currentActivity, 0)
        this.completionStatsService.initChapterCompletionStats(chapters)
      }
    )
  }

  updateSelectedCourse(currentActivity: Activity) {
    this.userService.userCourses$.subscribe(
      (courses: Course[]) => {
        this.selectedCourse = this.getSelectedCourse(courses, currentActivity)
        this.completionStatsService.initCourseCompletionStats(courses)
      }
    )
  }

  getSelectedChapter(chapters: Chapter[], currentActivity: Activity, offset: number) {
    const i = chapters.findIndex(
      (chapter: Chapter) => chapter.chid === currentActivity.meta.chid
    ) + offset
    // If Next is clicked on last activity in chapter, returning null triggers EOChapter page
    return (i >= 0) ? chapters[i] : null
  }

  getSelectedCourse(courses: Course[], currentActivity: Activity) {
    let selectedCourse = this.findSelectedCourse(courses, currentActivity)
    if (!selectedCourse) {
      // Normally we want to subscribe to userService.userCourses$ to make use of caching.
      // Subscribing to getUserCourses$ bypasses then updates userCourses$ shareReplay cache
      this.userService.getUserCourses$().subscribe(
        (courses: Course[]) => {
          this.selectedCourse = this.findSelectedCourse(courses, currentActivity)
          this.completionStatsService.initCourseCompletionStats(courses)
        }
      )
    } else {
      return selectedCourse
    }
  }

  findSelectedCourse(courses: Course[], currentActivity: Activity) {
    return courses.find(
      (course: Course) => course.pid === currentActivity.meta.pid
    )
  }

}

import { Injectable } from '@angular/core'
import { ActivitiesService } from '../../activities.service'
import { Activity } from '../../workarea/models/activity.model'
import { Chapter } from '../../models/chapter.model'
import { UserService } from '../../../../../core/services/user/user.service'
import { CompletionStatsService } from '../../../../../core/services/user/completion-stats.service'
import { Course } from 'src/app/models/course.model'

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
      (userCourses: Course[]) => {
        // this.selectedCourse = this.getSelectedCourse(userCourses, currentActivity)
        this.completionStatsService.initCourseCompletionStats(userCourses)
      }
    )
  }

  getSelectedChapter(chapters: Chapter[], currentActivity: Activity, offset: number) {
    const i = chapters.findIndex(
      (chapter: Chapter) => chapter.chid === currentActivity.meta.chapter_id
    ) + offset
    // If Next is clicked on last activity in chapter, returning null triggers EOChapter page
    return (i >= 0) ? chapters[i] : null
  }

  getSelectedCourse(userCourses: Course[], currentActivity: Activity) {
    let selectedCourse = this.findSelectedCourse(userCourses, currentActivity)
    if (!selectedCourse) {
      // Normally we want to subscribe to userService.userCourses$ to make use of caching.
      // Subscribing to getUserCourses$ bypasses then updates userCourses$ shareReplay cache
      this.userService.userCourses$.subscribe(
        (userCourses: Course[]) => {
          // this.selectedCourse = this.findSelectedCourse(userCourses, currentActivity)
          this.completionStatsService.initCourseCompletionStats(userCourses)
        }
      )
    } else {
      return selectedCourse
    }
  }

  findSelectedCourse(courses: Course[], currentActivity: Activity) {
    return false;
    // return courses.find(
    //   (course: Course) => course.id === currentActivity.meta.pid
    // )
  }

}

import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'

// WNGX services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { WorkareaService } from '../workarea.service'

// WNGX models and misc
import { Activity } from '../models/activity.model'
import { ActivityMeta } from '../models/activity-meta.model'

@Injectable({
  providedIn: 'root'
})

export class NavService {

  waitingForApi = false
  endOfChapter = false
  endOfCourse = false
  sub: Subscription

  constructor(
    private router: Router,
    private workareaService: WorkareaService,
    public selectedCourseService: SelectedCourseService
  ) { }

  calcFollowingAid(offset: number) {
    this.sub = this.selectedCourseService.selectedActivitySet$.subscribe(
      (activitySet: Activity[]) => {

        // For previous activity, the first in the current set interests us.
        // For next activity, it the current set's last activity we want.
        let calcStartActivity: Activity =
          (offset === 1) ? activitySet[activitySet.length - 1] : activitySet[0]

        // i = relevant activity's index position in the course syllabus
        let i: number = this.courseSyllabus.findIndex(
          (activityMeta: ActivityMeta) => {
            if (activityMeta.activity_id === calcStartActivity.meta.activity_id) return true
          }
        )

        if (i === this.courseSyllabus.length-1) {
          this.endOfChapter = this.endOfCourse = true;
        } else {
          console.log('More activities available')
          let activity = this.courseSyllabus[i + offset]
          this.endOfChapter = (this.courseSyllabus[i].chapter_id === activity.chapter_id) ? false : true
          this.router.navigateByUrl(`/webcourse/activities/${activity.activity_id}`)
          this.workareaService.loadActivities(activity.activity_id)
        }

        this.waitingForApi = false
      }
    )
    this.sub.unsubscribe()
  }

  get courseSyllabus() {
    return this.selectedCourseService.courseSyllabus
  }

  navDisable(status: boolean) {
    this.endOfChapter = this.endOfCourse = false
    this.waitingForApi = status
  }

}

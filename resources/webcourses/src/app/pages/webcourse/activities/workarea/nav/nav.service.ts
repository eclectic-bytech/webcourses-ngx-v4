import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { combineLatest, Subscription } from 'rxjs'

// WNGX services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { WorkareaService } from '../workarea.service'

// WNGX models and misc
import { Chapter } from '../../models/chapter.model'
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
    this.sub = combineLatest([
      this.selectedCourseService.selectedChapter$,
      this.selectedCourseService.selectedActivitySet$
    ]).subscribe(
      results => {
        this.waitingForApi = false

        let selectedChapterSyllabus: ActivityMeta[] = results[0].syllabus
        let activitySet: Activity[] = results[1]

        // For previous activity, the first in the current set interests us.
        // For next activity, it the current set's last activity we want.
        let selectedActivity: Activity =
          (offset === 1) ? activitySet[activitySet.length - 1] : activitySet[0]

        let i = selectedChapterSyllabus.findIndex(
          (activityMeta: ActivityMeta) => {
            if (activityMeta.activity_id === selectedActivity.meta.activity_id) return true
          }
        )

        // i starts at 0, comparison to length needs to be made with -1
        if (i < selectedChapterSyllabus.length-1) {
          console.log('More activities available')
          let activityId = selectedChapterSyllabus[++i].activity_id
          this.router.navigateByUrl(`/webcourse/activities/${activityId}`)
          this.workareaService.loadActivities(activityId)
        } else {
          console.log('No more activities in this chapter')
          this.endOfChapter = true
        }

      }
    )
    this.sub.unsubscribe()
  }

  getChapterAids(chapters: Chapter[], currentChapter: number) {
    function i(chapter: Chapter) {
      if (chapter.id === currentChapter) {
        return chapter
      }
    }
    return chapters[chapters.findIndex(i)].syllabus
  }

  navDisable(status: boolean) {
    this.endOfChapter = false
    this.endOfCourse = false
    this.waitingForApi = status
  }

}

import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { combineLatest } from 'rxjs'

// WNGX services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

// WNGX models and misc
import { Chapter } from '../../models/chapter.model'
import { Activity } from '../models/activity.model'
import { ActivityMeta } from '../models/activity-meta.model'
import { WorkareaService } from '../workarea.service'

@Injectable({
  providedIn: 'root'
})
export class NavService {

  waitingForApi = false
  endOfChapter = false
  endOfCourse = false

  constructor(
    private router: Router,
    private workareaService: WorkareaService,
    public selectedCourseService: SelectedCourseService
  ) { }

  calcFollowingAid(offset: number) {
    combineLatest([
      this.selectedCourseService.selectedChapter$,
      this.selectedCourseService.selectedActivitySet$
    ]).subscribe(
      results => {
        const selectedChapterSyllabus: ActivityMeta[] = results[0].syllabus
        const activitySet: Activity[] = results[1]
        const selectedActivity: Activity =
          (offset === 1) ? activitySet[activitySet.length - 1] : activitySet[0]

        let i = selectedChapterSyllabus.findIndex(
          (activityMeta: ActivityMeta) => {
            if (activityMeta.activity_id === selectedActivity.meta.activity_id) return true
          }
        )

        let activityId = selectedChapterSyllabus[++i].activity_id
        this.router.navigateByUrl(`/webcourse/activities/${activityId}`)
        this.workareaService.loadActivities(activityId)
      }
    )
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

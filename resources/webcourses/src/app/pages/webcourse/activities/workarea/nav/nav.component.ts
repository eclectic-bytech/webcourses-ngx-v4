import { Component } from '@angular/core'

// WNGX services
import { NavService } from './nav.service'
import { ActiveModeService } from '../active-mode/active-mode.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { WebcourseService } from '../../../webcourse.service'
import { ActivitiesService } from '../../activities.service'

import { ActivityMeta } from '../models/activity-meta.model'
import { Activity } from '../models/activity.model'
import { FadeInOut2 } from 'src/app/core/animations/fade-in-out-2.animation'

@Component({
  selector: 'wngx-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
  animations: [FadeInOut2]
})

export class NavComponent {

  get activitySet() { return this.activitiesService.activities }

  private nextAid: number

  constructor(
    public navService: NavService,
    private activitiesService: ActivitiesService,
    public activeModeService: ActiveModeService,
    public selectedCourseService: SelectedCourseService,
    public webcourseService: WebcourseService
  ) { }

  SaveButton() {
    this.webcourseService.waitingForApi = true
    this.activeModeService.userAnswerPOST(
      this.activeModeService.extractAnswers()
    )
  }

  printButton() {
    window.print()
  }



  calcFollowingAid(offset: number) {
    // Offset should be 1 for next activity, -1 for previous activity

    // For previous activity, the first in the current set interests us.
    // For next activity, it's the current set's last activity we want.
    let calcStartActivity: Activity =
      (offset === 1) ? this.activitySet[this.activitySet.length - 1] : this.activitySet[0]

    // seq = jump point activity's index position in the course syllabus
    let seq: number = this.selectedCourseService.courseSyllabus.findIndex(
      (activityMeta: ActivityMeta) => {
        if (activityMeta.activity_id === calcStartActivity.meta.activity_id) return true
      }
    )

    if (seq === this.selectedCourseService.courseSyllabus.length-1) {
      this.webcourseService.endOfCourse = true
    } else {
      var activityMeta: ActivityMeta = this.selectedCourseService.courseSyllabus[seq + offset]
      if (activityMeta.chapter_id != this.selectedCourseService.courseSyllabus[seq].chapter_id) {
        if (offset === 1) {
          // Show next chapter screer only if user clicked Next button, not back button
          this.webcourseService.endOfChapter = true
          this.nextAid = activityMeta.activity_id
        } else {
          // When user clicks back button, proceed to previous activity from previous chapter
          this.navService.NavigateByAid(activityMeta.activity_id)
        }
      } else {
        this.navService.NavigateByAid(activityMeta.activity_id)
      }
    }

  }

  ContinueButton() {
    this.navService.NavigateByAid(this.nextAid)
  }

  ReviewButton() {
    this.navService.NavigateByAid(this.selectedCourseService.courseSyllabus[0].activity_id)
  }

}

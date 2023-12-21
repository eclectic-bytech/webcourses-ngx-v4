import { Component } from '@angular/core'
import { faStepBackward, faCheck, faStepForward, faPenNib } from '@fortawesome/free-solid-svg-icons'

// WNGX services
import { NavService } from './nav.service'
import { ActiveModeService } from '../active-mode/active-mode.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { ActivitiesService } from '../../activities.service'

import { ActivityMeta } from '../models/activity-meta.model'
import { Activity } from '../models/activity.model'
import { FadeInOut2 } from 'src/app/core/animations/fade-in-out-2.animation'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
  animations: [FadeInOut2]
})

export class NavComponent {

  get activitySet() { return this.activitiesService.activities }

  private nextAid: number

  // FontAwesome icons
  faStepBackward = faStepBackward
  faCheck = faCheck
  faStepForward = faStepForward
  faPenNib = faPenNib

  constructor(
    public navService: NavService,
    public activitiesService: ActivitiesService,
    public activeModeService: ActiveModeService,
    public selectedCourseService: SelectedCourseService
  ) { }

  SaveButton() {
    this.activitiesService.waitingForApi = true
    this.activeModeService.userAnswerPOST(
      this.activeModeService.extractAnswers()
    )
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
      this.activitiesService.endOfCourse = true
    } else {
      var activityMeta: ActivityMeta = this.selectedCourseService.courseSyllabus[seq + offset]
      if (activityMeta.chapter_id != this.selectedCourseService.courseSyllabus[seq].chapter_id) {
        if (offset === 1) {
          // Show next chapter screer only if user clicked Next button, not back button
          this.activitiesService.endOfChapter = true
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

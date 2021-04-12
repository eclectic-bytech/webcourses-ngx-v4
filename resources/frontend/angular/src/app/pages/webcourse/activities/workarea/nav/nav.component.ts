import { Component, OnInit, Input } from '@angular/core'
import { NavService } from './nav.service'
import { Activity } from './../models/activity.model'
import { ActiveModeService } from '../active-mode/active-mode.service'
import { ActivitiesService } from '../../activities.service'
import { Location } from '@angular/common'

import { faStepBackward, faSpinner, faCheck, faPencilAlt, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { WorkareaService } from '../workarea.service'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  @Input() activity: Activity

  faStepBackward = faStepBackward
  faCheck = faCheck
  faPencilAlt = faPencilAlt
  faSpinner = faSpinner
  faThLarge = faThLarge

  constructor(
    public navService: NavService,
    private location: Location,
    private activeModeService: ActiveModeService,
    private activitiesService: ActivitiesService,
    private workareaService: WorkareaService
  ) { }

  ngOnInit() {
    this.workareaService.currentActivity$.subscribe(
      () => this.navService.navDisable(false)
    )
  }


  SaveButton() {
    this.navService.navDisable(true)
    const extractedAnswers = this.activeModeService.extractAnswers()
    this.activeModeService.userAnswerPOST(extractedAnswers)
  }


  GoToActivity(offset: number) {
    // Offset should be 1 for next activity, -1 for previous activity
    this.navService.navDisable(true)

    this.activitiesService.chapterIndex$.subscribe(
      (chapters) => {
        // Clicking next on last activity will result in followingAidInSet = undefined
        // Back button is disabled on first chapter activity set
        const followingAidInSet = this.navService.calcFollowingAid(chapters, offset)
        if (followingAidInSet) {
          this.workareaService.loadActivities(followingAidInSet)
          this.location.go(`/webcourse/activities/${followingAidInSet}`)
        } else {
          this.navService.endOfChapter = true
        }
      }
    )
  }

}

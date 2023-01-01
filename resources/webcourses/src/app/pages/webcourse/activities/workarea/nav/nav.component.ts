import { Component, OnInit, Input } from '@angular/core'
import { NavService } from './nav.service'
import { Activity } from './../models/activity.model'
import { ActiveModeService } from '../active-mode/active-mode.service'
import { Location } from '@angular/common'

import { faStepBackward, faSpinner, faCheck, faPencilAlt, faStepForward } from '@fortawesome/free-solid-svg-icons'
import { WorkareaService } from '../workarea.service'
import { ChapterIndexService } from '../../sidebar/chapter-index/chapter-index.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

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
  faStepForward = faStepForward

  constructor(
    public navService: NavService,
    private location: Location,
    public activeModeService: ActiveModeService,
    private chapterIndexService: ChapterIndexService,
    private workareaService: WorkareaService,
    private selectedCourseService: SelectedCourseService
  ) { }

  ngOnInit() {
    this.workareaService.currentActivity$.subscribe(
      () => this.navService.navDisable(false)
    )
  }

  SaveButton() {
    this.navService.navDisable(true)
    this.activeModeService.userAnswerPOST(
      this.activeModeService.extractAnswers()
    )
  }

  GoToActivity(offset: number) {
    // Offset should be 1 for next activity, -1 for previous activity
    this.navService.navDisable(true)

    this.chapterIndexService.getChapterIndex$(this.selectedCourseService.selectedCourse.id).subscribe(
      (chapters) => {
        // Clicking next on last activity will result in followingAidInSet = undefined
        // Back button is disabled on first chapter activity set
        const followingActivityInSet = this.navService.calcFollowingAid(chapters, offset)
        if (followingActivityInSet) {
          this.workareaService.loadActivities(followingActivityInSet.activity_id)
          this.location.go(`/webcourse/activities/${followingActivityInSet.activity_id}`)
        } else {
          this.navService.endOfChapter = true
        }
      }
    )
  }

}

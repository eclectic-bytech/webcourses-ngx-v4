import { Component, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { faStepBackward, faSpinner, faCheck, faPencilAlt, faStepForward } from '@fortawesome/free-solid-svg-icons'

// WNGX services
import { NavService } from './nav.service'
import { ActiveModeService } from '../active-mode/active-mode.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

// WNGX models and misc
import { Chapter } from '../../models/chapter.model'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})

export class NavComponent implements OnDestroy {

  private sub: Subscription

  // FontAwesome icons
  faStepBackward = faStepBackward
  faCheck = faCheck
  faPencilAlt = faPencilAlt
  faSpinner = faSpinner
  faStepForward = faStepForward

  constructor(
    public navService: NavService,
    public activeModeService: ActiveModeService,
    public selectedCourseService: SelectedCourseService
  ) { }

  ngOnInit() {
    this.sub = this.selectedCourseService.selectedChapterIndex$.subscribe(
      (chapterIndex: Chapter[]) => {
        if (chapterIndex) {
          chapterIndex.forEach( (chapter: Chapter) => {
            this.selectedCourseService.courseSyllabus =
            this.selectedCourseService.courseSyllabus.concat(chapter.syllabus)
          })
        }
      }
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
    this.navService.calcFollowingAid(offset)
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}

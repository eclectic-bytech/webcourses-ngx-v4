import { Component } from '@angular/core'

// WNGX services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

// WNGX models and misc
import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'
import { WorkareaService } from '../../workarea.service'

@Component({
  selector: 'app-chapter-end',
  templateUrl: './chapter-end.component.html',
  styleUrls: ['./chapter-end.component.scss'],
  animations: [FadeInOut]
})
export class ChapterEndComponent {

  constructor(
    public selectedCourseService: SelectedCourseService,
    public workareaService: WorkareaService
  ) { }

  continueButton() {
    this.workareaService.endOfChapter = false // run first, in case next line fails
    this.selectedCourseService.setChapters(this.selectedCourseService.selectedActivitySet[0].meta)
  }

}

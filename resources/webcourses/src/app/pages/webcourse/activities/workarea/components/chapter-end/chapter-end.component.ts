import { Component } from '@angular/core'

import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'

import { NavService } from '../../nav/nav.service'
import { WorkareaService } from '../../workarea.service'
import { ChapterIndexService } from '../../../sidebar/chapter-index/chapter-index.service'
import { SelectedService } from '../../../sidebar/selected/selected.service'

@Component({
  selector: 'app-chapter-end',
  templateUrl: './chapter-end.component.html',
  styleUrls: ['./chapter-end.component.scss'],
  animations: [FadeInOut]
})
export class ChapterEndComponent {

  constructor(
    public navService: NavService,
    public workareaService: WorkareaService,
    public chapterIndexService: ChapterIndexService,
    public selectedService: SelectedService
  ) { }

  continueButton() {
    if (this.selectedService.nextChapter) {
      this.workareaService.loadActivities(this.selectedService.nextChapter.syllabus[0].activity_id)
    } else {
      this.navService.endOfChapter = false
      this.navService.endOfCourse = true
    }
  }

}

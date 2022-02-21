import { Component } from '@angular/core'
import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'
import { WorkareaService } from '../../workarea.service'
import { Observable } from 'rxjs'
import { Chapter } from '../../../models/chapter.model'
import { SelectedService } from '../../../sidebar/selected/selected.service'

@Component({
  selector: 'app-course-end',
  templateUrl: './course-end.component.html',
  styleUrls: ['./course-end.component.scss'],
  animations: [FadeInOut]
})
export class CourseEndComponent {

  chapterIndex$: Observable<Chapter[]>

  constructor(
    private selectedService: SelectedService,
    private workareaService: WorkareaService
  ) { }

  reviewButton() {
    this.workareaService.loadActivities(this.selectedService.firstChapter.syllabus[0])
  }

}

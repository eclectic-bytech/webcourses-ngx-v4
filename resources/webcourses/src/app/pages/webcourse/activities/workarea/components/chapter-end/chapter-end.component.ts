import { Component } from '@angular/core'

// WNGX services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { NavService } from '../../nav/nav.service'

// WNGX models and misc
import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-chapter-end',
  templateUrl: './chapter-end.component.html',
  styleUrls: ['./chapter-end.component.scss'],
  animations: [FadeInOut]
})
export class ChapterEndComponent {

  constructor(
    public selectedCourseService: SelectedCourseService,
    public navService: NavService
  ) { }

}

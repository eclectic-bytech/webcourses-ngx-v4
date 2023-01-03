import { Component } from '@angular/core'
import { Location } from '@angular/common'

// WNGX Services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

// WNGX models and misc
import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'
import { Chapter } from '../../../models/chapter.model'
import { NavService } from '../../nav/nav.service'

@Component({
  selector: 'app-chapter-end',
  templateUrl: './chapter-end.component.html',
  styleUrls: ['./chapter-end.component.scss'],
  animations: [FadeInOut]
})
export class ChapterEndComponent {

  constructor(
    private location: Location,
    public selectedCourseService: SelectedCourseService,
    private navService: NavService
  ) { }

  continueButton(nextChapter: Chapter) {
    if (nextChapter) {
      this.location.go(`/webcourse/activities/${nextChapter.syllabus[0].activity_id}`)
    } else {
      this.navService.endOfChapter = false
      this.navService.endOfCourse = true
    }
  }

}

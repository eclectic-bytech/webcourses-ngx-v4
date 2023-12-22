import { Component } from '@angular/core'

// WNGX imports
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { CourseChapterIndexService } from 'src/app/core/services/course-chapter-index/course-chapter-index.service'

@Component({
  selector: 'app-chapter-end',
  templateUrl: './chapter-end.component.html',
  styleUrls: ['./chapter-end.component.scss'],
  animations: [FadeInOut]
})
export class ChapterEndComponent {

  constructor(
    public courseChapterIndexService: CourseChapterIndexService,
    public selectedCourseService: SelectedCourseService,
  ) { }

}

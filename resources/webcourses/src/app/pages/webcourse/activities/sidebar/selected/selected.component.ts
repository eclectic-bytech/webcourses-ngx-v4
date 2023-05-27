import { Component } from '@angular/core'

// WNGX imports
import { CompletionStatsService } from 'src/app/core/services/user/completion-stats.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { CourseChapterIndexService } from 'src/app/core/services/course-chapter-index/course-chapter-index.service'
import { FadeInOut2 } from 'src/app/core/animations/fade-in-out-2.animation'

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss'],
  animations: [FadeInOut2]
})
export class SelectedComponent {

  constructor(
    public completionStatsService: CompletionStatsService,
    public courseChapterIndexService: CourseChapterIndexService,
    public selectedCourseService: SelectedCourseService
  ) { }

}

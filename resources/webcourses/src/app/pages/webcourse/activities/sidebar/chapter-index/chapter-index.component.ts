import { Component } from '@angular/core'

// WNGX services
import { CompletionStatsService } from 'src/app/core/services/user/completion-stats.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { CourseChapterIndexService } from 'src/app/core/services/course-chapter-index/course-chapter-index.service'
import { WebcourseService } from '../../../webcourse.service'

// WNGX models and misc
import { Chapter } from '../../models/chapter.model'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { NavService } from '../../workarea/nav/nav.service'

@Component({
  selector: 'app-chapter-index',
  templateUrl: './chapter-index.component.html',
  styleUrls: ['./chapter-index.component.scss'],
  animations: [FadeInOut]
})
export class ChapterIndexComponent {

  constructor(
    public selectedCourseService: SelectedCourseService,
    public courseChapterIndexService: CourseChapterIndexService,
    private completionStatsService: CompletionStatsService,
    public webcourseService: WebcourseService,
    public navService: NavService
  ) { }

  chapterUnlock(chapterIndex: Chapter[], chapterNumber: number) {
    let seq = chapterIndex[chapterNumber].syllabus[0].seq
    return (seq <= this.completionStatsService.totalActivitiesCompleted) ? true : false
  }
}

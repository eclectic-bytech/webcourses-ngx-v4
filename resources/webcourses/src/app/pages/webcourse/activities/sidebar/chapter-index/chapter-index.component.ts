import { Component } from '@angular/core'
import { ActivitiesService } from '../../activities.service'
import { Chapter } from '../../models/chapter.model'
import { CompletionStatsService } from 'src/app/core/services/user/completion-stats.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { WorkareaService } from '../../workarea/workarea.service'
import { ChapterIndexService } from './chapter-index.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

@Component({
  selector: 'app-chapter-index',
  templateUrl: './chapter-index.component.html',
  styleUrls: ['./chapter-index.component.scss'],
  animations: [FadeInOut]
})
export class ChapterIndexComponent {

  constructor(
    public activitiesService: ActivitiesService,
    public selectedCourseService: SelectedCourseService,
    public chapterIndexService: ChapterIndexService,
    private completionStatsService: CompletionStatsService,
    public workareaService: WorkareaService
  ) { }

  chapterUnlock(chapterIndex: Chapter[], chapterNumber: number) {
    let seq = chapterIndex[chapterNumber].syllabus[0].seq
    return (seq <= this.completionStatsService.totalActivitiesCompleted) ? true : false
  }
}

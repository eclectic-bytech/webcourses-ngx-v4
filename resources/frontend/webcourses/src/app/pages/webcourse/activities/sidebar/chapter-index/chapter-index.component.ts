import { Component } from '@angular/core'
import { ActivitiesService } from '../../activities.service'
import { Chapter } from '../../models/chapter.model'
import { CompletionStatsService } from '../../../../../core/services/user/completion-stats.service'
import { FadeInOut } from '../../../../../core/animations/fade-in-out.animation'
import { WorkareaService } from '../../workarea/workarea.service'
import { ChapterIndexService } from './chapter-index.service'
import { SelectedCourseService } from '../../../../../../../src/app/core/services/selected-course/selected-course.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-chapter-index',
  templateUrl: './chapter-index.component.html',
  styleUrls: ['./chapter-index.component.scss'],
  animations: [FadeInOut]
})
export class ChapterIndexComponent {

  chapterIndex$: Observable<Chapter[]>

  constructor(
    public activitiesService: ActivitiesService,
    private selectedCourseService: SelectedCourseService,
    public chapterIndexService: ChapterIndexService,
    private completionStatsService: CompletionStatsService,
    public workareaService: WorkareaService
  ) { }

  ngOnInit() {
    this.chapterIndex$ = this.chapterIndexService.getChapterIndex$(
      this.selectedCourseService.selectedCourse.id
    )
  }

  chapterUnlock(chapterIndex: Chapter[], chapterNumber: number) {
    // First chapter, always unlocked
    if (chapterNumber === 0) {
      return true
    } else {
      // Second chapter and after is unlocked if previous is completed
      let previousChapter: Chapter = chapterIndex[chapterNumber - 1]
      if (this.completionStatsService.completionStats.inChid[previousChapter.id] === previousChapter.ta) {
        return true
      }
    }
    // None of the conditions for unlocking a chapter were met
    return false
  }

}

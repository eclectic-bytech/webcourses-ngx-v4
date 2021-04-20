import { Component } from '@angular/core'
import { ActivitiesService } from '../../activities.service'
import { Chapter } from '../../models/chapter.model'
import { CompletionStatsService } from '../../../../../core/services/user/completion-stats.service'
import { FadeInOut } from '../../../../../core/animations/fade-in-out.animation'
import { WorkareaService } from '../../workarea/workarea.service'

@Component({
  selector: 'app-chapter-index',
  templateUrl: './chapter-index.component.html',
  styleUrls: ['./chapter-index.component.scss'],
  animations: [FadeInOut]
})
export class ChapterIndexComponent {

  chapterIndex: Chapter[]

  constructor(
    public activitiesService: ActivitiesService,
    private completionStatsService: CompletionStatsService,
    public workareaService: WorkareaService
  ) { }

  chapterUnlock(chapterIndex: Chapter[], chapterNumber: number) {
    // First chapter, always unlocked
    if (chapterNumber === 0) {
      return true
    } else {
      // Second chapter and after is unlocked if previous is completed
      let previousChapter: Chapter = chapterIndex[chapterNumber - 1]
      if (this.completionStatsService.completionStats.inChid[previousChapter.chid] === previousChapter.ta) {
        return true
      }
    }
    // None of the conditions for unlocking a chapter were met
    return false
  }

}

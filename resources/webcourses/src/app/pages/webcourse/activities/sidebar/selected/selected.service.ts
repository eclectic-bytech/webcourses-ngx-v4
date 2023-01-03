import { Injectable } from '@angular/core'
import { Activity } from '../../workarea/models/activity.model'
import { Chapter } from '../../models/chapter.model'
import { UserService } from '../../../../../core/services/user/user.service'
import { CompletionStatsService } from '../../../../../core/services/user/completion-stats.service'
import { Course } from '../../../../../../../src/app/models/course.model'
import { ChapterIndexService } from '../chapter-index/chapter-index.service'

@Injectable({
  providedIn: 'root'
})
export class SelectedService {

  firstChapter: Chapter
  selectedChapter: Chapter
  nextChapter: Chapter

  selectedCourse: Course

  constructor(
    private completionStatsService: CompletionStatsService,
    private chapterIndexService: ChapterIndexService,
    private userService: UserService
  ) {}

  updateSelected(currentActivity: Activity) {
    console.log('UPDATE SELECTED - RUNNING')
    this.updateSelectedCourse(currentActivity)

    this.chapterIndexService.chapterIndex$.subscribe(
      (chapters: Chapter[]) => {
        let i = chapters.findIndex(
          (chapter: Chapter) => {
            if (chapter.id == currentActivity.meta.chapter_id) return true
          }
        )
        this.selectedChapter = chapters[i]
        this.firstChapter = chapters[0]

        let j = i+1
        this.nextChapter = (chapters[j]) ? chapters[j]: null

        this.completionStatsService.initChapterCompletionStats(chapters)
      }
    )
  }

  updateSelectedCourse(currentActivity: Activity) {
    this.userService.userCourses$.subscribe(
      (userCourses: Course[]) => {
        // this.selectedCourse = this.getSelectedCourse(userCourses, currentActivity)
        this.completionStatsService.initCourseCompletionStats(userCourses)
      }
    )
  }

  getSelectedChapter(chapters: Chapter[], currentActivity: Activity, offset: number) {
    return chapters.find(
      (chapter: Chapter) => {
        if (chapter.id == currentActivity.meta.chapter_id) return chapter
      }
    )
  }

}

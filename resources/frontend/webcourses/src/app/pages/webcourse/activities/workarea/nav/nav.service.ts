import { Injectable } from '@angular/core'
import { WorkareaService } from '../workarea.service'
import { Chapter } from '../../models/chapter.model'
import { ChapterIndexService } from '../../sidebar/chapter-index/chapter-index.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

@Injectable({
  providedIn: 'root'
})
export class NavService {

  waitingForApi = false
  endOfChapter = false
  endOfCourse = false
  firstActivitySet = true

  constructor(
    private workareaService: WorkareaService,
    private chapterIndexService: ChapterIndexService,
    private selectedCourseService: SelectedCourseService
  ) {}


  calcFollowingAid(chapters: Chapter[], offset: number) {
    const selectedActivity = (offset === 1) ?
      this.workareaService.activities[this.workareaService.activities.length - 1] :
      this.workareaService.activities[0]

    // Get array of aids in current chapter
    const chapterAids = this.getChapterAids(
      chapters, selectedActivity.meta.chapter_id
    )

    // Get AID that follows (offset 1) or precedes (offset -1) loaded activity set
    const i = chapterAids.findIndex(
      (aid: number) => aid === selectedActivity.meta.activity_id
    ) + offset

    return chapterAids[i]
  }

  getChapterAids(chapters: Chapter[], currentChapter: number) {
    function i(chapter: Chapter) {
      if (chapter.id === currentChapter) {
        return chapter
      }
    }
    return chapters[chapters.findIndex(i)].syllabus
  }

  firstActivitySetCheck() {
    this.chapterIndexService.getChapterIndex$(this.selectedCourseService.selectedCourse.id).subscribe(
      (chapters: Chapter[]) => {
        const aids = this.getChapterAids(chapters, this.workareaService.activities[0].meta.chapter_id)
        this.firstActivitySet = this.workareaService.activities[0].meta.activity_id === aids[0] ? true : false
      }
    )
  }

  navDisable(status: boolean) {
    this.endOfChapter = false
    this.endOfCourse = false
    this.firstActivitySetCheck()
    this.waitingForApi = status
  }

}

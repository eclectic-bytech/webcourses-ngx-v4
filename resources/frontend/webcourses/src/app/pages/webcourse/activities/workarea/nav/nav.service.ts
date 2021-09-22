import { Injectable } from '@angular/core'
import { WorkareaService } from '../workarea.service'
import { ActivitiesService } from '../../activities.service'
import { Chapter } from '../../models/chapter.model'

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
    private activitiesService: ActivitiesService
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
      if (chapter.chid === currentChapter) {
        return chapter
      }
    }
    return chapters[chapters.findIndex(i)].activities
  }

  firstActivitySetCheck() {
    this.activitiesService.chapterIndex$.subscribe(
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

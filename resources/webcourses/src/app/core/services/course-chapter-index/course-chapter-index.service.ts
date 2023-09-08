import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { shareReplay } from 'rxjs/operators'

// WNGX services
import { ConfigService } from '../config/config.service'
import { SelectedCourseService } from '../selected-course/selected-course.service'

// WNGX models and misc
import { Chapter } from 'src/app/pages/webcourse/activities/models/chapter.model'
import { Activity } from 'src/app/pages/webcourse/activities/workarea/models/activity.model'

@Injectable({
  providedIn: 'root'
})
export class CourseChapterIndexService {

  public selectedCourseChapters: Chapter[]
  public selectedChapter: Chapter
  public nextChapter: Chapter
  public previousChapter: Chapter

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private selectedCourseService: SelectedCourseService
  ) { }

  setChapters() {
    this.selectedCourseService.selectedActivitySet$.subscribe(
      (activitySet: Activity[]) => {
        let i = this.selectedCourseChapters.findIndex( chapter => {
          return chapter.id === activitySet[0].meta.chapter_id
        })
        this.selectedChapter = this.chapterIndex[i]
        this.nextChapter = (this.chapterIndex.length >= i) ? this.chapterIndex[++i] : null
        this.previousChapter = (i > 1) ? (this.chapterIndex[--i]) : null
      }
    )
  }

  getChapterIndex(cid: number) {
    return this.httpClient.get<Chapter[]>(
      `${this.configService.params.api.route}/webcourse/${cid}/chapters`
    ).pipe(shareReplay(1))
  }

  get chapterIndex() {
    return this.selectedCourseChapters
  }
}

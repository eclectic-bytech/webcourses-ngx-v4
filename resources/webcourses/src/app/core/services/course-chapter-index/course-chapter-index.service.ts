import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { shareReplay } from 'rxjs/operators'

// WNGX services
import { ConfigService } from '../config/config.service'

// WNGX models and misc
import { Chapter } from 'src/app/pages/webcourse/activities/models/chapter.model'

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
    private configService: ConfigService
  ) { }

  setChapters(chid: number) {
    let i = this.selectedCourseChapters.findIndex( chapter => {
      return chapter.id === chid
    })
    this.selectedChapter = this.chapterIndex[i]

    let nextChapter = (this.chapterIndex.length >= i) ? this.chapterIndex[++i] : null
    this.nextChapter = nextChapter

    let previousChapter = (i > 1) ? (this.chapterIndex[--i]) : null
    this.previousChapter = previousChapter
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

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { ConfigService } from '../../../core/services/config/config.service'
import { Chapter } from '../../../pages/webcourse/activities/models/chapter.model'
import { Activity } from '../../../pages/webcourse/activities/workarea/models/activity.model'
import { Course } from 'src/app/models/course.model'

@Injectable({
  providedIn: 'root'
})
export class CompletionStatsService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  completionStats = { inChid: [], inPid: [] }
  public cs = 0

  initChapterCompletionStats(chapterIndex: Chapter[]) {
    chapterIndex.forEach(chapter => {
      if (!this.completionStats.inChid[chapter.chid]) {
        this.completionStats.inChid[chapter.chid] = chapter.tac
      }
    })
  }

  initCourseCompletionStats(userCourses: Course[]) {
    userCourses.forEach(userCourse => {
      if (!this.completionStats.inPid[userCourse.id]) {
        this.completionStats.inPid[userCourse.id] = 0
      }
    })
  }

  bumpStats(activity: Activity) {
    this.completionStats.inChid[activity.meta.chapter_id]++
    // this.completionStats.inPid[activity.meta.pid]++
    this.completionStats.inPid[1]++
    console.log(this.completionStats.inPid[1])
  }

  stats(chid: number) {
    this.httpClient
      .get<number>(`${this.configService.params.api.route}/webcourse/chapter/${chid}/user_answer_count`)
      .subscribe(
        (uac) => { this.cs = uac },
        (err) => { console.log(err) }
      )
  }
}

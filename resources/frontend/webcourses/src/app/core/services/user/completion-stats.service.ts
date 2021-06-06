import { Injectable } from '@angular/core';
import { Chapter } from '../../../pages/webcourse/activities/models/chapter.model';
import { Activity } from '../../../pages/webcourse/activities/workarea/models/activity.model';
import { UserCourseProgress } from 'src/app/models/user.course.progress.model';

@Injectable({
  providedIn: 'root'
})
export class CompletionStatsService {

  constructor() { }
  completionStats = { inChid: [], inPid: [] }

  initChapterCompletionStats(chapterIndex: Chapter[]) {
    chapterIndex.forEach(chapter => {
      if (!this.completionStats.inChid[chapter.chid]) {
        this.completionStats.inChid[chapter.chid] = chapter.tac
      }
    })
  }

  initCourseCompletionStats(userCourses: UserCourseProgress[]) {
    userCourses.forEach(userCourse => {
      if (!this.completionStats.inPid[userCourse.pid]) {
        this.completionStats.inPid[userCourse.pid] = userCourse.tac
      }
    })
  }

  bumpStats(activity: Activity) {
    this.completionStats.inChid[activity.meta.chid]++
    this.completionStats.inPid[activity.meta.pid]++
  }
}

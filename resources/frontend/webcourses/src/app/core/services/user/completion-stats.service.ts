import { Injectable } from '@angular/core';
import { Chapter } from '../../../pages/webcourse/activities/models/chapter.model';
import { Activity } from '../../../pages/webcourse/activities/workarea/models/activity.model';
import { Course } from 'src/app/models/course.model';

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

  initCourseCompletionStats(userCourses: Course[]) {
    userCourses.forEach(userCourse => {
      if (!this.completionStats.inPid[userCourse.id]) {
        this.completionStats.inPid[userCourse.id] = 0
      }
    })
  }

  bumpStats(activity: Activity) {
    this.completionStats.inChid[activity.meta.chid]++
    this.completionStats.inPid[activity.meta.pid]++
  }
}

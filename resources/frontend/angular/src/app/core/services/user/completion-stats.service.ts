import { Injectable } from '@angular/core';
import { Chapter } from '../../../pages/webcourse/activities/models/chapter.model';
import { Activity } from '../../../pages/webcourse/activities/workarea/models/activity.model';
import { Course } from '../../../models/course.model';

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

  initCourseCompletionStats(courses: Course[]) {
    courses.forEach(course => {
      if (!this.completionStats.inPid[course.pid]) {
        this.completionStats.inPid[course.pid] = course.tac
      }
    })
  }

  bumpStats(activity: Activity) {
    this.completionStats.inChid[activity.meta.chid]++
    this.completionStats.inPid[activity.meta.pid]++
  }
}

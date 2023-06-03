import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

// WNGX services
// WNGX models and misc
import { Activity } from 'src/app/pages/webcourse/activities/workarea/models/activity.model'
import { ActivityMeta } from 'src/app/pages/webcourse/activities/workarea/models/activity-meta.model'
import { Course } from 'src/app/models/course.model'
import { CompletionStatsService } from '../user/completion-stats.service'

@Injectable({
  providedIn: 'root'
})
export class SelectedCourseService {

  // Activities can be bookmarked: selected course & chapter follow activity loading
  public selectedActivitySet$ = new BehaviorSubject<Activity[] | null>(null)
  public selectedCourse: Course
  public courseSyllabus: ActivityMeta[] // only used in next/prev activity nav

  constructor(
    public completionStatsService: CompletionStatsService
  ) { }

}

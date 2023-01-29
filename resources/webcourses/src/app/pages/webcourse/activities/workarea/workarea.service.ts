import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Location } from '@angular/common'

// WNGX services
import { ConfigService } from '../../../../core/services/config/config.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

// WNGX models and misc
import { Activity } from './models/activity.model'

@Injectable({
  providedIn: 'root'
})
export class WorkareaService {

  // Saving fetched activities to variable. Allows to later push activities into it
  // from Next button
  public activities: Activity[]
  public waitingForApi = false
  public endOfChapter = false
  public endOfCourse = false

  constructor(
    public httpClient: HttpClient,
    private configService: ConfigService,
    private location: Location,
    private selectedCourseService: SelectedCourseService
  ) {}

  loadActivities(aid) {
    this.getActivities(aid).subscribe(
      (activitySet: Activity[]) => {
        this.location.go(`/webcourse/activities/${aid}`)
        this.propagateActivities(activitySet)
        this.selectedCourseService.selectedActivitySet$.next(activitySet)
        this.selectedCourseService.selectedActivitySet = activitySet
      }
    )
  }

  propagateActivities(activitySet: Activity[]) {
    console.log('Propagate activities.')

    if (activitySet.length === 1) {
      if (activitySet[0].meta.cont) {
        this.activities = this.activities.concat(activitySet)
      } else {
        this.activities = activitySet
        this.scrollToTop()
      }

    } else {
      if (!this.activities) {
        this.activities = activitySet
      } else {
        this.hackAroundBackendLimitation(activitySet)
      }
    }
  }

  getActivities(aid: any) {
    return this.httpClient
      .get<Activity[]>(
        `${this.configService.params.api.route}/webcourse/activities/${aid}`
      ).pipe(activities => activities)
  }

  hackAroundBackendLimitation(activities: Activity[]) {
    /*  On a GET, backend always sends a complete sequence of activities. This works,
        makes some things easier, but makes proper animations difficult:

        Clicking Next in active mode results in _all_ activities fading out, then back in,
        with next activity added. To avoid that, we check if there are existing activities
        to avoid overwriting them causing additional, undesired fades. */
    if (this.activities[0].meta.activity_id === activities[0].meta.activity_id) {

      // Length comparison fixes last activity getting re-added when an activity
      // progress bar in the same activity set is clicked (issue #161)
      if (this.activities.length != activities.length) {
        this.activities.push(activities[activities.length -1])
      }

    } else {
      this.activities = activities
      this.scrollToTop()
    }
  }

  scrollToTop() {
    // Used for scroll to top when a new activity set is loaded. Added when activity loading was
    // changed from router to function call based loading.

    // When course info pages were introduced, their longer content made it clear that
    // scrollPositionRestoration in app-router had to be enabled. That caused each activity-load
    // to scroll to top of set (when sidebar is hidden.) Changing from router to function call
    // activity loading fixed that, but this scroll to top had to be introduced so new activity
    // sets don't start scrolled to bottom.

    // Workarea / activities are probably best converted to flex boxes. This'll allow for an
    // undefined height, but scrollable work area. Activity loading can then be switched back
    // to router based loading.
    window.scroll(0,0)
  }
}

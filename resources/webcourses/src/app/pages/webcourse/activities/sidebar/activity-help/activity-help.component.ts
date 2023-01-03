import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

// WNGX Services
import { ConfigService } from '../../../../../core/services/config/config.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

// WNGX Models and Misc
import { Activity } from '../../workarea/models/activity.model'
import { FadeInOut } from '../../../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-activity-help',
  templateUrl: './activity-help.component.html',
  styleUrls: ['./activity-help.component.sass'],
  animations: [FadeInOut]
})
export class ActivityHelpComponent implements OnInit {

  public activityHelp$ = new BehaviorSubject<string | null>(null)

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private selectedCourseService: SelectedCourseService
  ) { }

  ngOnInit() {
    this.selectedCourseService.selectedActivitySet$.subscribe(
      (activities: Activity[]) => {
        this.getActivityHelp(activities[activities.length - 1].meta.activity_type).subscribe(
          (help: string) => { this.activityHelp$.next(help) }
        )
      }
    )
  }

  getActivityHelp(type: string) {
    return this.httpClient.get<string>(
      `${this.configService.params.api.route}/webcourse/activities/help/${type}`
    ).pipe(shareReplay(1))
  }

}

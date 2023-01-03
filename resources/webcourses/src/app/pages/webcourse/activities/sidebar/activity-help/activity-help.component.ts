import { Component, OnInit } from '@angular/core'
import { WorkareaService } from './../../workarea/workarea.service'
import { HttpClient } from '@angular/common/http'
import { Activity } from '../../workarea/models/activity.model'
import { FadeInOut } from '../../../../../core/animations/fade-in-out.animation'
import { ConfigService } from '../../../../../core/services/config/config.service'

@Component({
  selector: 'app-activity-help',
  templateUrl: './activity-help.component.html',
  styleUrls: ['./activity-help.component.sass'],
  animations: [FadeInOut]
})
export class ActivityHelpComponent implements OnInit {

  activityHelp: string[] = new Array()
  activityType: string

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    public workareaService: WorkareaService,
  ) {
    this.activityType = this.workareaService.activities[this.workareaService.activities.length - 1].meta.activity_type
  }

  ngOnInit() {
    this.getActivityHelp(this.activityType)

    this.workareaService.currentActivitySet$
      .subscribe(
        (activities: Activity[]) => {
          this.activityType = activities[0].meta.activity_type
          this.getActivityHelp(this.activityType) },
        (err) => { console.log(err) }
      )
  }

  getActivityHelp(type: string) {
    if (!this.activityHelp[type]) {
      this.httpClient.get<string>(
        `${this.configService.params.api.route}/webcourse/activities/help/${type}`
      ).subscribe(
        (help) => { this.activityHelp[type] = help },
        (err) => { console.log(err) }
      )
    }
  }

}

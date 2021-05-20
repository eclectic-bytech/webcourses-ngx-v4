import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from './../../../../../core/services/config/config.service'
import { Activity } from '../models/activity.model'

@Injectable({
  providedIn: 'root'
})
export class CustomActivitiesService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  count: any

  activityRouter(activity: Activity) {
    if (activity.meta.aid === 3531 || activity.meta.aid === 3536) {
      this.beforeAfterCount(activity.meta.aid)
    }
  }

  beforeAfterCount(aid: number) {
    this.httpClient.get<string>(
      `${this.configService.params.api.route}/webcourse/activities/custom-activity.php?aid=${aid}`
    ).subscribe(
      (count) => { this.count = count },
      (err) => { console.log(err) }
    )
  }

}

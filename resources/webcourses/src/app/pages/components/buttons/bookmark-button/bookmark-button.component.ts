import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConfigService } from 'src/app/core/services/config/config.service';
import { Activity } from 'src/app/pages/webcourse/activities/workarea/models/activity.model';

@Component({
  selector: 'app-bookmark-button',
  templateUrl: './bookmark-button.component.html',
  styleUrls: ['./bookmark-button.component.sass']
})

export class BookmarkButtonComponent implements OnInit {

  @Input() activity: Activity
  isBookMarked: boolean

  private waitingForAPI = false

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
  ) { }

  ngOnInit() {
    this.isBookMarked = !!this.activity.bookmark
  }

  bookmarkActivity(aid: number) {
    if (!this.waitingForAPI) {
      this.waitingForAPI = true
      if (!this.isBookMarked) {
        this.httpClient.post<number>(
          `${this.configService.params.api.route}/webcourse/activities/bookmark/${aid}/create`, aid
        ).subscribe(
          (response) => { console.log(response) },
          (err) => { console.log(err) },
          () => { this.waitingForAPI = false } // This executes every time, regardless whether API call succeeded or failed
        )
      } else {
        this.httpClient.delete<number>(
          `${this.configService.params.api.route}/webcourse/activities/bookmark/${aid}/delete`
        ).subscribe(
          (response) => { console.log(response) },
          (err) => { console.log(err) },
          () => { this.waitingForAPI = false } // This executes every time, regardless whether API call succeeded or failed
        )
      }
      this.isBookMarked = !this.isBookMarked
    }
  }
}

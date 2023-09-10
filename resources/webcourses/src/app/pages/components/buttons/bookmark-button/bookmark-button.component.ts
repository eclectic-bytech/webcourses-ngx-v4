import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConfigService } from 'src/app/core/services/config/config.service';
import { Activity } from 'src/app/pages/webcourse/activities/workarea/models/activity.model';
import { BookmarksService } from 'src/app/pages/webcourse/activities/sidebar/bookmarks/bookmarks.service';

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
    private bookmarksService: BookmarksService
  ) { }

  ngOnInit() {
    this.isBookMarked = !!this.activity.bookmark
    this.bookmarksService.getBookmarks(this.activity.meta.course_id)
  }

  addBookmark(aid: number, cid: number) {
    if (!this.waitingForAPI) {
      this.waitingForAPI = true
      this.httpClient.post<number>(
        `${this.configService.params.api.route}/webcourse/activities/bookmark/${aid}`, aid
      ).subscribe(
        (response) => { console.log(response); this.bookmarksService.getBookmarks(cid) },
        (err) => { console.log(err) },
        () => { this.waitingForAPI = false } // This executes every time, regardless whether API call succeeded or failed
      )
      this.isBookMarked = !this.isBookMarked
    }
  }
  removeBookmark(aid: number, cid: number) {
    if (!this.waitingForAPI) {
      this.waitingForAPI = true
      this.httpClient.delete<number>(
        `${this.configService.params.api.route}/webcourse/activities/bookmark/${aid}`
      ).subscribe(
        (response) => { console.log(response); this.bookmarksService.getBookmarks(cid) },
        (err) => { console.log(err) },
        () => { this.waitingForAPI = false } // This executes every time, regardless whether API call succeeded or failed
      )
      this.isBookMarked = !this.isBookMarked
    }
  }
}

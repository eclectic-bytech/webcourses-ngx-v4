import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/pages/webcourse/activities/workarea/models/activity.model';
import { BookmarksService } from 'src/app/pages/webcourse/activities/sidebar/bookmarks/bookmarks.service';

@Component({
  selector: 'app-bookmark-button',
  templateUrl: './bookmark-button.component.html',
  styleUrls: ['./bookmark-button.component.sass']
})

export class BookmarkButtonComponent implements OnInit {

  @Input() activity: Activity
  constructor(
    public bookmarksService: BookmarksService
  ) { }

  ngOnInit() {
    this.bookmarksService.isBookMarked = !!this.activity.bookmark
    this.bookmarksService.current_activity = this.activity.meta
    this.bookmarksService.getBookmarks(this.activity.meta.course_id)
  }
}

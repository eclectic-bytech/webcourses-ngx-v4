import { Component, OnInit } from '@angular/core';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './bookmark.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.sass']
})
export class BookmarksComponent implements OnInit {
  bookmarkIndex: Bookmark[]
  constructor(
    public bookmarksService: BookmarksService,
  ) { }
  ngOnInit() {
    this.bookmarksService.getChapterIndex(1)
  }
}

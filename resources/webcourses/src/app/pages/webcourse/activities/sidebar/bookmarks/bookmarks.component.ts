import { Component } from '@angular/core';
import { BookmarksService } from './bookmarks.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.sass']
})
export class BookmarksComponent {
  constructor(
    public bookmarksService: BookmarksService,
  ) { }
}

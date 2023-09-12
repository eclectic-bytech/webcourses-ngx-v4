import { Component, Input } from '@angular/core';
import { Bookmark } from '../../bookmarks/bookmark.model';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { BookmarksService } from '../../bookmarks/bookmarks.service';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.sass']
})
export class BookmarkCardComponent {
  faTrash = faTrash
  constructor(
    public router: Router,
    public bookmarksService: BookmarksService
  ) { }
  @Input() bookmark: Bookmark
}

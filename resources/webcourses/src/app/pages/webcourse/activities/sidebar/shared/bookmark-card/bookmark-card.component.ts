import { Component, Input } from '@angular/core';
import { Bookmark } from '../../bookmarks/bookmark.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.sass']
})
export class BookmarkCardComponent {
  constructor(
    public router: Router
  ) { }
  @Input() bookmark: Bookmark
}

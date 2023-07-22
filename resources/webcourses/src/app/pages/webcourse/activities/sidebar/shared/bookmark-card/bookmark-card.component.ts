import { Component, Input } from '@angular/core';
import { Bookmark } from '../../bookmarks/bookmark.model';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.sass']
})
export class BookmarkCardComponent {
  @Input() bookmark: Bookmark
}

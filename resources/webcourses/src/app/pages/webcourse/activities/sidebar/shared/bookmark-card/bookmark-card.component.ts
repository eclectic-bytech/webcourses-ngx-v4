import { Component, Input } from '@angular/core';
import { Bookmark } from '../../bookmarks/bookmark.model';
import { NavService } from '../../../workarea/nav/nav.service';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.sass']
})
export class BookmarkCardComponent {
  constructor(
    public navService: NavService
  ) { }
  @Input() bookmark: Bookmark
}

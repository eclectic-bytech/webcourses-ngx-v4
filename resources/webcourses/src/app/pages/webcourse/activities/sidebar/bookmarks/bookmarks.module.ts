import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BookmarksComponent } from './bookmarks.component'
import { LoadingSpinnerModule } from './../../../../../core/modules/loading-spinner/loading-spinner.module';
import { BookmarkCardModule } from '../shared/bookmark-card/bookmark-card.module';

@NgModule({
  declarations: [BookmarksComponent],
  imports: [
    CommonModule,
    LoadingSpinnerModule,
    BookmarkCardModule
  ],
  exports: [BookmarksComponent]
})

export class BookmarksModule { }

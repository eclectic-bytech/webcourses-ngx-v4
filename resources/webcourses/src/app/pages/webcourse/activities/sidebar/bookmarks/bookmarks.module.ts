import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BookmarksComponent } from './bookmarks.component'
import { LoadingSpinnerModule } from './../../../../../core/modules/loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [BookmarksComponent],
  imports: [
    CommonModule,
    LoadingSpinnerModule
  ],
  exports: [BookmarksComponent]
})

export class BookmarksModule { }

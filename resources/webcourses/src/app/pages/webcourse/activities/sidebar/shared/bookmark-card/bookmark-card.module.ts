import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkCardComponent } from './bookmark-card.component';



@NgModule({
  declarations: [
    BookmarkCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookmarkCardComponent
  ]
})
export class BookmarkCardModule { }

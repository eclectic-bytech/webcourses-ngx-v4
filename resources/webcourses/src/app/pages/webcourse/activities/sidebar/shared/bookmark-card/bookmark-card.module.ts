import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkCardComponent } from './bookmark-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'



@NgModule({
  declarations: [
    BookmarkCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    BookmarkCardComponent
  ]
})
export class BookmarkCardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkButtonComponent } from './bookmark-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookmarkButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BookmarkButtonComponent
  ]
})
export class BookmarkButtonModule { }

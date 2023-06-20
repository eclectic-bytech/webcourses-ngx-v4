import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkButtonComponent } from './bookmark-button.component';

@NgModule({
  declarations: [
    BookmarkButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookmarkButtonComponent
  ]
})
export class BookmarkButtonModule { }

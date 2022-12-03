import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherMenuComponent } from './menu.component';

@NgModule({
  declarations: [
    PublisherMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PublisherMenuComponent
  ]
})

export class PublisherMenuModule { }

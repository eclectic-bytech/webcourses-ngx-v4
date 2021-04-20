import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop'

/* Webcourse-NG resources */
import { DndComponent } from './dnd.component'

@NgModule({
  declarations: [
    DndComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [ DndComponent ]
})

export class DndModule { }

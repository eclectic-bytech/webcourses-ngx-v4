import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoFlagComponent } from './demo-flag.component';



@NgModule({
  declarations: [
    DemoFlagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ DemoFlagComponent ]
})
export class DemoFlagModule { }

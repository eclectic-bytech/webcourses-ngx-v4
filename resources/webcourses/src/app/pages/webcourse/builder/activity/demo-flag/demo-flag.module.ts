import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DemoFlagComponent } from './demo-flag.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    DemoFlagComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ DemoFlagComponent ]
})
export class DemoFlagModule { }

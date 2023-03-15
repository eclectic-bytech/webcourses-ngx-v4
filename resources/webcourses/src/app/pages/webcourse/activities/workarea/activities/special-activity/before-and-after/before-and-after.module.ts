import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// WNGX imports
import { BeforeAndAfterComponent } from './before-and-after.component'


@NgModule({
  declarations: [
    BeforeAndAfterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BeforeAndAfterComponent
  ]
})

export class BeforeAndAfterModule { }

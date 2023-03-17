import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

// WNGX imports
import { BeforeAndAfterComponent } from './before-and-after.component'


@NgModule({
  declarations: [
    BeforeAndAfterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    BeforeAndAfterComponent
  ]
})

export class BeforeAndAfterModule { }

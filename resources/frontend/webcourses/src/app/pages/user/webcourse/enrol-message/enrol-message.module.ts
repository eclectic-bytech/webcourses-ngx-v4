import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EnrolMessageRoutingModule } from './enrol-message-routing.module'
import { EnrolMessageComponent } from './enrol-message.component'
import { ThemeResetModule } from './../../../../core/directives/theme-reset/theme-reset.module'

@NgModule({
  declarations: [
    EnrolMessageComponent
  ],
  imports: [
    CommonModule,
    EnrolMessageRoutingModule,
    ThemeResetModule
  ]
})
export class EnrolMessageModule { }

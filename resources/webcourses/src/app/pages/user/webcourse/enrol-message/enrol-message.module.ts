import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EnrolMessageRoutingModule } from './enrol-message-routing.module'
import { EnrolMessageComponent } from './enrol-message.component'
import { ThemeResetModule } from '../../../../views/theme-reset/theme-reset.module'
import { PipesModule } from './../../../../shared/pipes/pipes.module'

@NgModule({
  declarations: [
    EnrolMessageComponent
  ],
  imports: [
    CommonModule,
    EnrolMessageRoutingModule,
    ThemeResetModule,
    PipesModule
  ]
})
export class EnrolMessageModule { }

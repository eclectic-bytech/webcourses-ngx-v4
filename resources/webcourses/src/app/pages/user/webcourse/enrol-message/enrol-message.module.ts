import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EnrolMessageRoutingModule } from './enrol-message-routing.module'
import { EnrolMessageComponent } from './enrol-message.component'
import { ThemeModule } from '../../../../views/theme/theme.module'
import { PipesModule } from './../../../../shared/pipes/pipes.module'

@NgModule({
  declarations: [
    EnrolMessageComponent
  ],
  imports: [
    CommonModule,
    EnrolMessageRoutingModule,
    ThemeModule,
    PipesModule
  ]
})
export class EnrolMessageModule { }

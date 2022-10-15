import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublishersRoutingModule } from './publishers-routing.module'
import { PublishersComponent } from './publishers.component'
import { ThemeResetModule } from './../../../core/directives/theme-reset/theme-reset.module'

@NgModule({
  declarations: [PublishersComponent],
  imports: [
    CommonModule,
    PublishersRoutingModule,
    ThemeResetModule
  ]
})

export class PublishersModule { }

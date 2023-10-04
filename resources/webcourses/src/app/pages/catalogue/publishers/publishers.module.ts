import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublishersRoutingModule } from './publishers-routing.module'
import { PublishersComponent } from './publishers.component'
import { ThemeModule } from '../../../views/theme/theme.module'

@NgModule({
  declarations: [PublishersComponent],
  imports: [
    CommonModule,
    PublishersRoutingModule,
    ThemeModule
  ]
})

export class PublishersModule { }

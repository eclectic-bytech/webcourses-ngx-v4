import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PublishRoutingModule } from './publish-routing.module'
import { PublishComponent } from './publish.component'


@NgModule({
  declarations: [
    PublishComponent
  ],
  imports: [
    CommonModule,
    PublishRoutingModule
  ]
})
export class PublishModule { }

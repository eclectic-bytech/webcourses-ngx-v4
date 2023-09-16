import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PublisherProfileRoutingModule } from './profile-routing.module'
import { PublisherProfileComponent } from './profile.component'

@NgModule({
  declarations: [
    PublisherProfileComponent
  ],
  imports: [
    CommonModule,
    PublisherProfileRoutingModule
  ],
  exports: [
    PublisherProfileComponent
  ]
})

export class PublisherProfileModule { }

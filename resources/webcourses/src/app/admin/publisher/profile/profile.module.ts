import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PublisherProfileRoutingModule } from './profile-routing.module'
import { PublisherProfileComponent } from './profile.component'
import { HeaderModule } from '../blocks/header/header.module'

@NgModule({
  declarations: [
    PublisherProfileComponent
  ],
  imports: [
    CommonModule,
    PublisherProfileRoutingModule,
    HeaderModule
  ],
  exports: [
    PublisherProfileComponent
  ]
})

export class PublisherProfileModule { }

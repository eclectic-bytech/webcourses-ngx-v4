import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { ContactRoutingModule } from './contact-routing.module'
import { ContactComponent } from './contact.component'


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FontAwesomeModule
  ]
})
export class ContactModule { }

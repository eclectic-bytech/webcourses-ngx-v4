import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { ContactRoutingModule } from './contact-routing.module'
import { ContactComponent } from './contact.component'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FontAwesomeModule,
    PipesModule
  ]
})
export class ContactModule { }

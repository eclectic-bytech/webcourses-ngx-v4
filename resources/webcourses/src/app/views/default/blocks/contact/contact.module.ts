import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ContactBlockComponent } from './contact.component'

@NgModule({
  declarations: [
    ContactBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ContactBlockComponent
  ]
})

export class ContactBlockModule { }

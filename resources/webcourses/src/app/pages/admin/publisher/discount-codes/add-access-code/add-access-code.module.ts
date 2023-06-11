import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AddAccessCodeRoutingModule } from './add-access-code-routing.module'
import { AddAccessCodeComponent } from './add-access-code.component'


@NgModule({
  declarations: [
    AddAccessCodeComponent
  ],
  imports: [
    CommonModule,
    AddAccessCodeRoutingModule
  ]
})
export class AddAccessCodeModule { }

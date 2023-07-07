import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'

import { AddAccessCodeRoutingModule } from './add-access-code-routing.module'
import { AddAccessCodeComponent } from './add-access-code.component'


@NgModule({
  declarations: [
    AddAccessCodeComponent
  ],
  imports: [
    CommonModule,
    AddAccessCodeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class AddAccessCodeModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { UnderConstructionRoutingModule } from './under-construction-routing.module'
import { UnderConstructionComponent } from './under-construction.component'


@NgModule({
  declarations: [
    UnderConstructionComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    UnderConstructionRoutingModule
  ]
})
export class UnderConstructionModule { }

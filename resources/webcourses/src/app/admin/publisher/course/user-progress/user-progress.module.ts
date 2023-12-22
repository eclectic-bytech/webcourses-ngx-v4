import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserProgressRoutingModule } from './user-progress-routing.module'
import { UserProgressComponent } from './user-progress.component'


@NgModule({
  declarations: [
    UserProgressComponent
  ],
  imports: [
    CommonModule,
    UserProgressRoutingModule
  ]
})
export class UserProgressModule { }

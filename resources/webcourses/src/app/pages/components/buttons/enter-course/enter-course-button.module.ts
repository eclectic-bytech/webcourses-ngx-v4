import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'

import { EnterCourseComponent } from './enter-course.component'

@NgModule({
  declarations: [
    EnterCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [EnterCourseComponent]
})
export class EnterCourseButtonModule { }

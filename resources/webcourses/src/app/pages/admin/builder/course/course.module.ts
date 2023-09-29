import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatButtonModule } from '@angular/material/button'

import { CourseRoutingModule } from './course-routing.module'
import { CourseComponent } from './course.component'


@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule
  ]
})
export class CourseModule { }

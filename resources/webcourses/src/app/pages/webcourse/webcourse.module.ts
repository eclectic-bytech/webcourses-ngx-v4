import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WebcourseRoutingModule } from './webcourse-routing.module'
import { WebcourseComponent } from './webcourse.component'

@NgModule({
  declarations: [
    WebcourseComponent
  ],
  imports: [
    CommonModule,
    WebcourseRoutingModule
  ]
})

export class WebcourseModule { }

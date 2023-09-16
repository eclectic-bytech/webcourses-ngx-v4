import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublisherCoursesComponent } from './courses.component'
import { PublisherCoursesRoutingModule } from './courses-routing.module'

@NgModule({
  declarations: [
    PublisherCoursesComponent
  ],
  imports: [
    CommonModule,
    PublisherCoursesRoutingModule
  ],
  exports: [
    PublisherCoursesComponent
  ]
})

export class PublisherCoursesModule { }

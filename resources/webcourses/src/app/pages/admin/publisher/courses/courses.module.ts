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
  ]
})

export class PublisherCoursesModule { }

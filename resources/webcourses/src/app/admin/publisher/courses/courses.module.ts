import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublisherCoursesComponent } from './courses.component'
import { PublisherCoursesRoutingModule } from './courses-routing.module'
import { HeaderModule } from '../blocks/header/header.module'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    PublisherCoursesComponent
  ],
  imports: [
    CommonModule,
    PublisherCoursesRoutingModule,
    MatButtonModule,
    HeaderModule
  ],
  exports: [
    PublisherCoursesComponent
  ]
})

export class PublisherCoursesModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

// import { AppRoutingModule } from './../../../app-routing.module'
import { AdminCoursesComponent } from './admin-courses.component'

@NgModule({
  declarations: [AdminCoursesComponent],
  imports: [
    CommonModule,
    // AppRoutingModule,
    FontAwesomeModule
  ]
})
export class AdminCoursesModule { }

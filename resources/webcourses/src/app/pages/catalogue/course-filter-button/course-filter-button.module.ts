import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CourseFilterButtonComponent } from './course-filter-button.component';


@NgModule({
  declarations: [
    CourseFilterButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule
  ],
  exports: [
    CourseFilterButtonComponent
  ]
})
export class CourseFilterButtonModule { }

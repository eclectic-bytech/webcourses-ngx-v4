import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFilterButtonComponent } from './course-filter-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CourseFilterButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CourseFilterButtonComponent
  ]
})
export class CourseFilterButtonModule { }

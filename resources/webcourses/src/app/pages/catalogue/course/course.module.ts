import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CourseComponent } from './course.component'
import { CourseRoutingModule } from './course-routing.module'
import { LoadingSpinnerModule } from '../../../core/modules/loading-spinner/loading-spinner.module'
import { ThemeModule } from '../../../views/theme/theme.module'

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    LoadingSpinnerModule,
    ThemeModule
  ]
})

export class CourseModule { }

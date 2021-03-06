import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReviewModeModule } from '../../../webcourse/activities/workarea/review-mode/review-mode.module'
import { StudentComponent } from './student.component'
import { StudentRoutingModule } from './student-routing.module'
import { ThemeResetModule } from '../../../../core/directives/theme-reset/theme-reset.module'

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    ReviewModeModule,
    StudentRoutingModule,
    ThemeResetModule
  ]
})
export class StudentModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReviewModeModule } from 'src/app/pages/webcourse/activities/workarea/student/review-mode/review-mode.module'
import { StudentComponent } from './student.component'
import { StudentRoutingModule } from './student-routing.module'
import { ThemeModule } from 'src/app/views/theme/theme.module'

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    ReviewModeModule,
    StudentRoutingModule,
    ThemeModule
  ]
})
export class StudentModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentsComponent } from './students.component'
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { StudentsRoutingModule } from './students-routing.module'
import { FilterPipe } from './filter.pipe'
import { FormsModule } from '@angular/forms'
import { ThemeResetModule } from '../../../../views/theme-reset/theme-reset.module'

@NgModule({
  declarations: [
    StudentsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    StudentsRoutingModule,
    FormsModule,
    ThemeResetModule
  ]
})
export class StudentsModule { }

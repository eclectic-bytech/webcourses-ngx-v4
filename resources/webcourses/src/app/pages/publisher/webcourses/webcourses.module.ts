import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WebcoursesRoutingModule } from './webcourses-routing.module'
import { WebcoursesComponent } from './webcourses.component'
import { ThemeModule } from '../../../views/theme/theme.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    WebcoursesComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    WebcoursesRoutingModule,
    ThemeModule
  ]
})
export class WebcoursesModule {}

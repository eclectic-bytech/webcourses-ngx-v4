import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WebcoursesRoutingModule } from './webcourses-routing.module'
import { WebcoursesComponent } from './webcourses.component'
import { ThemeResetModule } from './../../../core/directives/theme-reset/theme-reset.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    WebcoursesComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    WebcoursesRoutingModule,
    ThemeResetModule
  ]
})
export class WebcoursesModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { GravatarModule } from 'ngx-gravatar'
import { MatButtonModule } from '@angular/material/button'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { WebcoursesComponent } from './webcourses.component'
import { WebcoursesRoutingModule } from './webcourses-routing.module'
import { CatalogueCardModule } from '../../components/course-card/catalogue-card/catalogue-card.module'
import { LoadingSpinnerModule } from '../../../core/modules/loading-spinner/loading-spinner.module'
import { EnterCourseModule } from '../../components/buttons/enter-course/enter-course.module'

@NgModule({
  declarations: [
    WebcoursesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    GravatarModule,
    MatButtonModule,
    WebcoursesRoutingModule,
    CatalogueCardModule,
    LoadingSpinnerModule,
    FontAwesomeModule,
    EnterCourseModule
  ]
})

export class WebcoursesModule { }

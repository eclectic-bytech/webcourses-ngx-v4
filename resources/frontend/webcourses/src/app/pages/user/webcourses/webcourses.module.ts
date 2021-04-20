import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WebcoursesComponent } from './webcourses.component'
import { WebcoursesRoutingModule } from './webcourses-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MyCoursesCardComponent } from '../../components/course-card/my-courses-card/my-courses-card.component'
import { GroupJoinCardModule } from './../../components/course-card/my-courses-card/group-join-card/group-join-card.module'
import { LoadingSpinnerModule } from '../../../core/modules/loading-spinner/loading-spinner.module'

@NgModule({
  declarations: [
    WebcoursesComponent,
    MyCoursesCardComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    WebcoursesRoutingModule,
    GroupJoinCardModule,
    LoadingSpinnerModule
  ]
})

export class WebcoursesModule { }

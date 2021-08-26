import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WebcoursesComponent } from './webcourses.component'
import { WebcoursesRoutingModule } from './webcourses-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MyCoursesCardModule } from '../../components/course-card/my-courses-card/my-courses-card.module'
import { GroupJoinCardModule } from './../../components/course-card/my-courses-card/group-join-card/group-join-card.module'
import { LoadingSpinnerModule } from '../../../core/modules/loading-spinner/loading-spinner.module'

@NgModule({
  declarations: [
    WebcoursesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    WebcoursesRoutingModule,
    MyCoursesCardModule,
    GroupJoinCardModule,
    LoadingSpinnerModule
  ]
})

export class WebcoursesModule { }

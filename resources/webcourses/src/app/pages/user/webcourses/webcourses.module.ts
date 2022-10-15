import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WebcoursesComponent } from './webcourses.component'
import { WebcoursesRoutingModule } from './webcourses-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CatalogueCardModule } from '../../components/course-card/catalogue-card/catalogue-card.module'
import { GroupJoinCardModule } from '../../components/group-join-card/group-join-card.module'
import { LoadingSpinnerModule } from '../../../core/modules/loading-spinner/loading-spinner.module'

@NgModule({
  declarations: [
    WebcoursesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    WebcoursesRoutingModule,
    CatalogueCardModule,
    GroupJoinCardModule,
    LoadingSpinnerModule
  ]
})

export class WebcoursesModule { }

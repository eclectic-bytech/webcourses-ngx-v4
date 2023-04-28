import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { GravatarModule } from 'ngx-gravatar'


import { WebcoursesComponent } from './webcourses.component'
import { WebcoursesRoutingModule } from './webcourses-routing.module'
import { CatalogueCardModule } from '../../components/course-card/catalogue-card/catalogue-card.module'
import { GroupJoinCardModule } from '../../components/group-join-card/group-join-card.module'
import { LoadingSpinnerModule } from '../../../core/modules/loading-spinner/loading-spinner.module'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'

@NgModule({
  declarations: [
    WebcoursesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    GravatarModule,
    PipesModule,
    WebcoursesRoutingModule,
    CatalogueCardModule,
    LoadingSpinnerModule
  ]
})

export class WebcoursesModule { }

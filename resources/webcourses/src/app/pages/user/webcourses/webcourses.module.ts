import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { GravatarModule } from 'ngx-gravatar'
import { MatButtonModule } from '@angular/material/button'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { WebcoursesComponent } from './webcourses.component'
import { WebcoursesRoutingModule } from './webcourses-routing.module'
import { CatalogueCardModule } from 'src/app/pages/components/course-card/catalogue-card/catalogue-card.module'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'

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
    FontAwesomeModule
  ]
})

export class WebcoursesModule { }

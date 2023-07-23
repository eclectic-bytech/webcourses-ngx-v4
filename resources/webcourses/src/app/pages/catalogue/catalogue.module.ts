import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CatalogueCardModule } from './../components/course-card/catalogue-card/catalogue-card.module'
import { CatalogueComponent } from './catalogue.component'
import { CatalogueRoutingModule } from './catalogue-routing.module'
import { ThemeResetModule } from 'src/app/core/directives/theme-reset/theme-reset.module'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'

@NgModule({
  declarations: [
    CatalogueComponent
  ],
  providers: [
    CatalogueComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbAlertModule,
    MatCardModule,
    FontAwesomeModule,
    CatalogueRoutingModule,
    MatButtonModule,
    ThemeResetModule,
    CatalogueCardModule,
    PipesModule
  ],
  exports: []
})
export class CatalogueModule { }

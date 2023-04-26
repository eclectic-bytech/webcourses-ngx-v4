import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { MatCardModule } from '@angular/material/card'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatButtonModule } from '@angular/material/button'

import { CatalogueCardModule } from './../components/course-card/catalogue-card/catalogue-card.module'
import { CatalogueComponent } from './catalogue.component'
import { BuyButtonModule } from './../components/buttons/buy-button/buy-button.module'
import { CatalogueRoutingModule } from './catalogue-routing.module'
import { ThemeResetModule } from './../../core/directives/theme-reset/theme-reset.module'
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
    MatSlideToggleModule,
    CatalogueRoutingModule,
    MatButtonModule,
    ThemeResetModule,
    BuyButtonModule,
    CatalogueCardModule,
    PipesModule
  ],
  exports: []
})
export class CatalogueModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'

import { CatalogueCardModule } from './../components/course-card/catalogue-card/catalogue-card.module'
import { CatalogueComponent } from './catalogue.component'
import { CouponOptionModule } from './../../pages/components/coupon-field/coupon-field.module'
import { BuyButtonModule } from './../components/buttons/buy-button/buy-button.module'
import { CatalogueRoutingModule } from './catalogue-routing.module'
import { ThemeResetModule } from './../../core/directives/theme-reset/theme-reset.module'

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
    CatalogueRoutingModule,
    ThemeResetModule,
    BuyButtonModule,
    CouponOptionModule,
    CatalogueCardModule
  ],
  exports: []
})
export class CatalogueModule { }

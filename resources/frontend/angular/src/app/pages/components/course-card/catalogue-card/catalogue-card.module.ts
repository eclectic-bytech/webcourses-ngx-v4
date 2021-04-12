import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CatalogueCardComponent } from './catalogue-card.component'
import { RouterModule } from '@angular/router'
import { CouponOptionModule } from '../../coupon-field/coupon-field.module'
import { BuyButtonModule } from '../../buttons/buy-button/buy-button.module'

@NgModule({
  declarations: [CatalogueCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    CouponOptionModule,
    BuyButtonModule
  ],
  exports: [CatalogueCardComponent]
})
export class CatalogueCardModule { }

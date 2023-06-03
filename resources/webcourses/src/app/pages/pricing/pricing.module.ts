import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PricingRoutingModule } from './pricing-routing.module'
import { PricingComponent } from './pricing.component'


@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }

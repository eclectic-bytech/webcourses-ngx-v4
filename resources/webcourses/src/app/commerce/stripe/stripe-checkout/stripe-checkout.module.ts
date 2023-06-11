import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StripeCheckoutRoutingModule } from './stripe-checkout-routing.module'
import { StripeCheckoutComponent } from './stripe-checkout.component'


@NgModule({
  declarations: [
    StripeCheckoutComponent
  ],
  imports: [
    CommonModule,
    StripeCheckoutRoutingModule
  ]
})
export class StripeCheckoutModule { }

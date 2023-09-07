import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'

import { StripeCheckoutRoutingModule } from './stripe-checkout-routing.module'
import { StripeCheckoutComponent } from './stripe-checkout.component'


@NgModule({
  declarations: [
    StripeCheckoutComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    StripeCheckoutRoutingModule
  ],
  exports: [
    StripeCheckoutComponent
  ]
})
export class StripeCheckoutModule { }

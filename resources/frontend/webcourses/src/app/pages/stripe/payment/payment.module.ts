import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component'
import { PaymentFailedComponent } from './payment-failed/payment-failed.component'
import { PaymentRoutingModule } from './payment-routing.module'

@NgModule({
  declarations: [PaymentSuccessfulComponent, PaymentFailedComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }

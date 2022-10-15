import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component'
import { PaymentFailedComponent } from './payment-failed/payment-failed.component'

const routes: Routes = [
  {
    path: 'success',
    component: PaymentSuccessfulComponent,
    data: {
      title: 'Payment successful'
    }
  },
  {
    path: 'failed',
    component: PaymentFailedComponent,
    data: {
      title: 'Payment failed'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PaymentRoutingModule { }

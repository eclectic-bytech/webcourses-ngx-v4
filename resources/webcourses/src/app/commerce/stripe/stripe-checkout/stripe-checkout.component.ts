import { Component } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.sass'],
  animations: [FadeInOut]
})

export class StripeCheckoutComponent {

}

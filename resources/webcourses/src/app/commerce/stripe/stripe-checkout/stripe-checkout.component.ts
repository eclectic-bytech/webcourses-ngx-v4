import { HttpClient } from '@angular/common/http'
import { Component, Input } from '@angular/core'
import { ConfigService } from 'src/app/core/services/config/config.service'

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.sass']
})

export class StripeCheckoutComponent {

  @Input() public cid: number

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}

  public BuyButton() {
    this.httpClient.get(`
      ${this.configService.params.api.route}/commerce/stripe/checkout/course/${this.cid}`
    ).subscribe(
      data => {
        console.log('Hello, World')
        console.log(data)
      }
    )
  }
}

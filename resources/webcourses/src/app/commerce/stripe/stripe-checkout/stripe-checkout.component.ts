import { HttpClient } from '@angular/common/http'
import { Component, Input } from '@angular/core'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { UserService } from 'src/app/core/services/user/user.service'

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.sass']
})

export class StripeCheckoutComponent {

  @Input() public cid: number

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private userService: UserService
  ) {}

  public BuyButton() {
    if (!this.userService.user) {
      window.location.href = '/user/login'
    } else {
      this.httpClient.get(
        `${this.configService.params.api.route}/commerce/stripe/checkout/course/${this.cid}`
      ).subscribe(
        (checkoutUrl: string) => {
          window.location.href = checkoutUrl
        }
      )
    }
  }
}

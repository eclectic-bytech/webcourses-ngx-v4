import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { UserService } from './core/services/user/user.service'
import { CookieService } from 'ngx-cookie-service'

import { JetstreamUser } from './core/models/jetstream-user.model'
import { PurchaseOrderService } from './pages/stripe/payment/purchase-order/purchase-order.service'
import { TaxStatusService } from './core/services/tax-status/tax-status.service'

@Injectable({
  providedIn: 'root'
})

export class AppService {

  public taxStatus = true

  constructor(
    private cookieService: CookieService,
    private titleService: Title,
    private userService: UserService,
    private poService: PurchaseOrderService,
    private taxService: TaxStatusService,
  ) {}

  initLogged() {
    this.userService.getUser().subscribe(
      (user: JetstreamUser) => {

        // Call will return empty response if user is not logged in.
        // We check for that before overwriting anon user.
        if (user) this.userService.user$.next(user)

        this.taxService.taxesApply(user)
        // If purchase_course is set, user logged in after clicking Buy as Anon
        // saw 'Please login' modal, and followed through with the login link
        if (this.cookieService.check('cllhairbiesltliunlee_purchase_course')) {
          this.poService.makePurchase(Number(this.cookieService.get('cllhairbiesltliunlee_purchase_course')), null)
        }
        // Called here, just in case the clean-up in makePurchase is not reached
        // Needed until hard reload applies cookie code data (price changes and related)
        this.poService.cleanUpCodePurchaseCookies()
      },
      (err) => { console.log(err) }
    )
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle)
  }

}

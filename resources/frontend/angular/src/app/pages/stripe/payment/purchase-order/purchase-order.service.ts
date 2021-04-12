import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { ConfigService } from '../../../../core/services/config/config.service'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService,
    private cookieService: CookieService
  ) { }

  makePurchase(cid: string, codeHash: string) {
    const purchaseData = {
      cid: cid,
      coupon_code: (codeHash) ? codeHash : this.cookieService.get('cllhairbiesltliunlee_discount_code')
    }

    // Clean-up for codes used by already logged in users
    this.cleanUpCodePurchaseCookies()

    this.http.post(`
      ${this.configService.params.api.v1.path}/payments/unified_method.php
      `, purchaseData).subscribe(
        (checkout: any) => {
          if (checkout.payment_required) {
            window.location.href = `
              ${this.configService.params.api.v1.path}/payments/stripe/payment_page.php?sid=${checkout.id}
            `
          } else {
            this.router.navigateByUrl('/user/webcourse/' + purchaseData.cid + '/welcome')
          }
        },
        (err) => { console.log(err) }
    )
  }

  cleanUpCodePurchaseCookies() {
    // DELETE DOESN'T WORK ON SUBDOMAINS (v3.0.4). USING SET() UNTIL FIXED.
    // https://github.com/stevermeister/ngx-cookie-service/issues/93

    // this.cookieService.delete('cllhairbiesltliunlee_purchase_course','/')
    // this.cookieService.delete('cllhairbiesltliunlee_discount_code','/')
    this.cookieService.set('cllhairbiesltliunlee_purchase_course', '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), '/', this.configService.params.domain, true, 'None')
    this.cookieService.set('cllhairbiesltliunlee_discount_code', '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), '/', this.configService.params.domain, true, 'None')
  }
}

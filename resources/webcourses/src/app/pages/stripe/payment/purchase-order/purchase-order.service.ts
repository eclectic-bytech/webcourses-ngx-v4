import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { ConfigService } from '../../../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService
  ) { }

  makePurchase(cid: number) {
    this.http.get(`${this.configService.params.api.route}/purchase/course/${cid}`)
      .subscribe(
        (checkout: any) => {
          if (checkout.payment_required) {
            window.location.href = `
              ${this.configService.params.api.route}/payments/stripe/payment_page.php?sid=${checkout.id}
            `
          } else {
            this.router.navigateByUrl('/user/webcourse/' + cid + '/welcome')
          }
        },
        (err) => { console.log(err) }
      )
  }
}

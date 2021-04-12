import { Component, Input, OnChanges } from '@angular/core'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { CookieService } from 'ngx-cookie-service'
import { AuthService2 } from '../../../../core/services/auth/auth2.service'

import { ConfigService } from '../../../../core/services/config/config.service'
import { PurchaseOrderService } from './../../../stripe/payment/purchase-order/purchase-order.service'
import { CatalogueModel } from './../../../catalogue/models/catalogue.model'

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent implements OnChanges {

  faSpinner = faSpinner

  @Input() course
  @Input() btnLg: boolean

  public button
  public closeResult
  public purchaseStarted = false

  constructor(
    public auth2: AuthService2,
    public poService: PurchaseOrderService,
    private ngbModal: NgbModal,
    private cookieService: CookieService,
    private configService: ConfigService
  ) { }

  // If coupon is applied, ensures that price on Buy Button is updated
  ngOnChanges() {}

  buyButton() {
    this.purchaseStarted = true
    this.poService.makePurchase(this.course.cid, null)
  }

  loginRequired(content) {
    this.ngbModal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      // this.closeResult = `Closed with: ${result}`

      if (result === 'login') {
        this.cookieService.set(
          'cllhairbiesltliunlee_purchase_course', this.course.cid, 1, '/', this.configService.params.domain, true, 'None'
        )
        this.auth2.login()
      }

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC'
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop'
    } else {
      return  `with: ${reason}`
    }
  }
}

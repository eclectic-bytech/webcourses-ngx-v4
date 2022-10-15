import { Component, Input, OnChanges } from '@angular/core'
import { Router } from '@angular/router'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { CookieService } from 'ngx-cookie-service'
import { UserService } from './../../../../core/services/user/user.service'

import { ConfigService } from '../../../../core/services/config/config.service'
import { PurchaseOrderService } from './../../../stripe/payment/purchase-order/purchase-order.service'
import { Course } from 'src/app/models/course.model'

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent implements OnChanges {

  faSpinner = faSpinner

  @Input() course: Course
  @Input() btnLg: boolean

  public button
  public closeResult
  public purchaseStarted = false

  constructor(
    private router: Router,
    public poService: PurchaseOrderService,
    private ngbModal: NgbModal,
    private cookieService: CookieService,
    public userService: UserService,
    private configService: ConfigService
  ) { }

  // If coupon is applied, ensures that price on Buy Button is updated
  ngOnChanges() {}

  buyButton() {
    this.purchaseStarted = true
    this.poService.makePurchase(this.course.id, null)
  }

  loginRequired(content) {
    this.ngbModal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      // this.closeResult = `Closed with: ${result}`

      if (result === 'login') {
        this.cookieService.set(
          'cllhairbiesltliunlee_purchase_course', String(this.course.id), 1, '/', this.configService.params.cookies.domain, true, 'None'
        )
        this.router.navigateByUrl('/user/login')
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

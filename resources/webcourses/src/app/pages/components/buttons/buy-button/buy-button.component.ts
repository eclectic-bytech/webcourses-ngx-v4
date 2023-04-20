import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// WNGX services and models
import { UserService } from './../../../../core/services/user/user.service'
import { PurchaseOrderService } from './../../../stripe/payment/purchase-order/purchase-order.service'
import { Course } from 'src/app/models/course.model'

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent {

  faSpinner = faSpinner

  @Input() course: Course
  @Input() btnLg: boolean

  public button
  public purchaseStarted = false

  constructor(
    private router: Router,
    public poService: PurchaseOrderService,
    private ngbModal: NgbModal,
    public userService: UserService
  ) { }

  buyButton() {
    this.purchaseStarted = true
    this.poService.makePurchase(this.course.id)
  }

  loginRequired(content) {
    this.ngbModal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) => {
        if (result === 'login') this.router.navigateByUrl('/user/login')
      }
    )
  }

}

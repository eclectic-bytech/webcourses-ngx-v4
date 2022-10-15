import { Component, OnInit } from '@angular/core'
import { CouponFieldService } from '../coupon-field/coupon-field.service'
import { PurchaseOrderService } from '../../stripe/payment/purchase-order/purchase-order.service'

@Component({
  selector: 'app-group-join-card',
  templateUrl: './group-join-card.component.html',
  styleUrls: ['./group-join-card.component.sass']
})
export class GroupJoinCardComponent implements OnInit{

  public showGroupCodeInput = false

  constructor(
    public couponFieldService: CouponFieldService,
    public poService: PurchaseOrderService
  ) {}

  ngOnInit () {
    this.couponFieldService.listenForCouponStatus$.next(this.couponFieldService.defaultCoupon)
  }

  enrolButton(cid: string, codeHash: string) {
    this.poService.makePurchase(Number(cid), codeHash)
    this.couponFieldService.coupon = null
  }

}

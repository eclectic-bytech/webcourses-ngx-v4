import { Component } from '@angular/core'
import { PurchaseOrderService } from '../../stripe/payment/purchase-order/purchase-order.service'

@Component({
  selector: 'app-group-join-card',
  templateUrl: './group-join-card.component.html',
  styleUrls: ['./group-join-card.component.sass']
})
export class GroupJoinCardComponent {

  constructor(
    public poService: PurchaseOrderService
  ) {}

  enrolButton(cid: string, codeHash: string) {
    this.poService.makePurchase(Number(cid), codeHash)
  }

}

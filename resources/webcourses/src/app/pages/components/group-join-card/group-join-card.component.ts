import { Component } from '@angular/core'
import { PurchaseOrderService } from '../../stripe/payment/purchase-order/purchase-order.service'
import { AccessCodeModalService } from '../access-code-modal/access-code-modal.service'

@Component({
  selector: 'app-group-join-card',
  templateUrl: './group-join-card.component.html',
  styleUrls: ['./group-join-card.component.sass']
})
export class GroupJoinCardComponent {

  constructor(
    public accessCodeModalService: AccessCodeModalService,
    public poService: PurchaseOrderService
  ) {}

  enrolButton(cid: string, codeHash: string) {
    this.poService.makePurchase(Number(cid), codeHash)
  }

}

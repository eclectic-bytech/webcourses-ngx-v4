import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { DiscountCodesService } from './discount-codes.service'
import { Coupon } from 'src/app/models/coupon.model'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-discount-codes',
  templateUrl: './discount-codes.component.html',
  styleUrls: ['./discount-codes.component.sass'],
  animations: [FadeInOut]
})
export class DiscountCodesComponent implements OnInit {

  public discountCodes$: Observable<any[]>

  constructor(
    private discountCodesService: DiscountCodesService
  ) { }

  ngOnInit(): void {
    this.discountCodes$ = this.discountCodesService.getDiscountCodes()
  }

  pillClass(discountCode) {
    let pill_class = "badge-success"
    if ((discountCode.uses_max - discountCode.uses) < 10 && discountCode.uses_max != 0) pill_class = "badge-warning"
    if ((discountCode.uses_max - discountCode.uses) <= 0 && discountCode.uses_max != 0) pill_class = "badge-danger"
    return pill_class
  }

}

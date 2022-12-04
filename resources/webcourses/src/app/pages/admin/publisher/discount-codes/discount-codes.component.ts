import { Component, OnInit } from '@angular/core'

import { DiscountCodesService } from './discount-codes.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { Observable } from 'rxjs'
import { Coupon } from 'src/app/models/coupon.model'

@Component({
  selector: 'app-discount-codes',
  templateUrl: './discount-codes.component.html',
  styleUrls: ['./discount-codes.component.sass'],
  animations: [FadeInOut]
})
export class DiscountCodesComponent implements OnInit {

  public discountCodes$: Observable<Coupon>

  constructor(
    private discountCodesService: DiscountCodesService
  ) { }

  ngOnInit(): void {
    this.discountCodes$ = this.discountCodesService.getDiscountCodes$()
  }

}

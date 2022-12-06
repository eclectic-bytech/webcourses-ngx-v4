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

}

import { Component, Input, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { CouponFieldService } from './coupon-field.service'
import { FadeInOut } from '../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-coupon-field',
  templateUrl: './coupon-field.component.html',
  styleUrls: ['./coupon-field.component.sass'],
  animations: [FadeInOut]
})
export class CouponFieldComponent implements OnDestroy {

  faSpinner = faSpinner

  @Input() course
  private sub = new Subscription

  constructor(
    public couponFieldService: CouponFieldService
  ) { }

  submitCouponButton(code: string) {
    this.couponFieldService.validateCoupon(code, this.course)
    this.sub = this.couponFieldService.listenForPriceAdjustment$.subscribe(
      (discountedPrice) => { this.course.price = discountedPrice },
      (err) => { console.log(err) }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}

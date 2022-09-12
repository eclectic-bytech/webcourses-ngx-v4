import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Md5 } from 'ts-md5/dist/md5'
import { CookieService } from 'ngx-cookie-service'
import { ConfigService } from '../../../core/services/config/config.service'
import { Subject, BehaviorSubject } from 'rxjs'
import { CouponCode } from '../../../commerce/models/coupon.model'

@Injectable()
export class CouponFieldService {

  defaultCoupon = {
    status: { valid: false, message: '', cssClass: '' },
    details: { group_code: {
        cover: {
          image_url: 'assets/card-logo.png',
          alt_desc: 'Access webcourses using a group code'
        },
        cid: null
      },
      course_code: { courseCode: { cid: null, discount: 0 }},
      short_desc: '<u>Group Access Codes only.</u> If the code you have does not work, follow the instructions that came with it.',
      label: 'Got a Group Access Code?',
      hash: ''
    }
  }

  public verifyingCoupon = false
  public course
  public coupon
  public listenForPriceAdjustment$: Subject<any> = new Subject<any>()
  public listenForCouponStatus$ = new BehaviorSubject<CouponCode>(<CouponCode> this.defaultCoupon)
  private hashedCoupon: any

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private configService: ConfigService,
  ) {}

  validateCoupon(code: string, course) {
    this.verifyingCoupon = true
    this.course = course
    this.hashedCoupon = Md5.hashStr(code)

    switch (course && this.cookieService.check('cllhairbiesltliunlee_discount_code')) {
      case true:
        /* CourseId was provided with code. Check if this code was already applied */
        const appliedCode = this.cookieService.get('cllhairbiesltliunlee_discount_code')
        if (appliedCode === this.hashedCoupon) {
          this.endValidation()
          this.verifyingCoupon = false
          break
        }

      // tslint:disable-next-line
      default:
        /* Will be execute everytime, unless explicitly broken in case true */
        const courseId = (this.course) ? this.course.cid : null
        this.apiCall(this.hashedCoupon, courseId).subscribe(
          (response) => {
            this.coupon = response
            if (this.coupon.status.valid) {
              (courseId) ? this.applyCourseCode() : this.applyGroupCode()
            }
            this.verifyingCoupon = false
          },
          (err) => {
            this.coupon = {
              status: {
                valid: false,
                message: `HTTP Error ${err.status}: ${err.statusText}`,
                cssClass: 'danger'
              }
            }
            this.verifyingCoupon = false
          }
        )
    }
  }

  applyCourseCode() {
    this.listenForPriceAdjustment$.next(this.course.price -= this.coupon.details.course_code.discount)
    this.cookieService.set(
      'cllhairbiesltliunlee_discount_code', this.hashedCoupon, 1, '/', this.configService.params.cookies.domain, true, 'None'
    )
  }

  applyGroupCode() {
    this.listenForCouponStatus$.next(this.coupon)
  }

  apiCall(hashedCoupon: string, courseId: string) {
    return this.http.get<any>(
      `${this.configService.params.api.route}/coupons/apply_coupon.php?coupon=${hashedCoupon}&cid=${courseId}`
    )
  }

  endValidation() {
    this.coupon = {
      status: { valid: false, message: `Coupon already applied`, cssClass: 'warning' }
    }
  }

}

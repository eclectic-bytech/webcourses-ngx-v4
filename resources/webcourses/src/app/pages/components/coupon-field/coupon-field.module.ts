import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { CouponFieldComponent } from './coupon-field.component'
import { CouponFieldService } from './coupon-field.service'

@NgModule({
  declarations: [CouponFieldComponent],
  imports: [
    CommonModule,
    NgbAlertModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [CouponFieldComponent],
  providers: [CouponFieldService]
})
export class CouponOptionModule { }

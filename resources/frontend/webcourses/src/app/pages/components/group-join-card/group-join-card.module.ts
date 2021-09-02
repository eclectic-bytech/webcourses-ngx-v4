import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GroupJoinCardComponent } from './group-join-card.component'
import { CouponOptionModule } from '../coupon-field/coupon-field.module'
import { PipesModule } from '../../../shared/pipes/pipes.module'

@NgModule({
  declarations: [GroupJoinCardComponent],
  imports: [CommonModule, CouponOptionModule, PipesModule],
  exports: [GroupJoinCardComponent]
})

export class GroupJoinCardModule { }

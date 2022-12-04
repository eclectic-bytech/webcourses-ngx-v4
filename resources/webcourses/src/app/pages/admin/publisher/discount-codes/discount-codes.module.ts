import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DiscountCodesComponent } from './discount-codes.component'
import { DiscountCodesRoutingModule } from './discount-codes-routing.module'

@NgModule({
  declarations: [
    DiscountCodesComponent
  ],
  imports: [
    CommonModule,
    DiscountCodesRoutingModule
  ]
})
export class DiscountCodesModule { }

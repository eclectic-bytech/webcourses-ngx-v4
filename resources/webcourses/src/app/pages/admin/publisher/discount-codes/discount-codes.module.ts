import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DiscountCodesComponent } from './discount-codes.component'
import { DiscountCodesRoutingModule } from './discount-codes-routing.module'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'

@NgModule({
  declarations: [
    DiscountCodesComponent
  ],
  imports: [
    CommonModule,
    DiscountCodesRoutingModule,
    LoadingSpinnerModule
  ]
})

export class DiscountCodesModule { }

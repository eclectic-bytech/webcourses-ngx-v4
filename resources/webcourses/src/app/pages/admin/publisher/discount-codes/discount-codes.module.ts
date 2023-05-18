import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// 3rd party modules
import { ClipboardModule } from 'ngx-clipboard'

// WNGX modules and components
import { DiscountCodesRoutingModule } from './discount-codes-routing.module'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'
import { DiscountCodesComponent } from './discount-codes.component'

@NgModule({
  declarations: [
    DiscountCodesComponent
  ],
  imports: [
    CommonModule,
    ClipboardModule,
    DiscountCodesRoutingModule,
    LoadingSpinnerModule
  ]
})

export class DiscountCodesModule { }

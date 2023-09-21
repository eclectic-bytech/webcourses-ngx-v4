import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxStripeModule } from 'ngx-stripe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'

// 3rd party modules
import { ClipboardModule } from 'ngx-clipboard'

// WNGX modules and components
import { DiscountCodesRoutingModule } from './discount-codes-routing.module'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'
import { DiscountCodesComponent } from './discount-codes.component'
import { HeaderModule } from '../blocks/header/header.module'
import { MatSnackBarModule } from "@angular/material/snack-bar"

@NgModule({
  declarations: [
    DiscountCodesComponent
  ],
  imports: [
    CommonModule,
    ClipboardModule,
    DiscountCodesRoutingModule,
    LoadingSpinnerModule,
    NgxStripeModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    HeaderModule
  ],
  exports: [
    DiscountCodesComponent
  ]
})

export class DiscountCodesModule { }

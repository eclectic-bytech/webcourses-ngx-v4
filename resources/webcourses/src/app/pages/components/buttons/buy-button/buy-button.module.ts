import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { BuyButtonComponent } from './buy-button.component'

@NgModule({
  declarations: [
    BuyButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    BuyButtonComponent
  ]
})
export class BuyButtonModule { }

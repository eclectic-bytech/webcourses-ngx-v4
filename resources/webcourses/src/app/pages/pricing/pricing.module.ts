import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PricingRoutingModule } from './pricing-routing.module'
import { PricingComponent } from './pricing.component'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'
import { ContactBlockModule } from 'src/app/views/default/blocks/contact/contact.module'

@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule,
    PipesModule,
    ContactBlockModule
  ]
})
export class PricingModule { }

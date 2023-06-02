import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PricingComponent } from './pricing.component'

const routes: Routes = [
  {
    path: '',
    component: PricingComponent,
    data: {
      title: 'Cultivate Learning Pricing'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }

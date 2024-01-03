import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { CatalogueCardComponent } from './catalogue-card.component'
import { StripeCheckoutModule } from 'src/app/commerce/stripe/stripe-checkout/stripe-checkout.module'
import { PipesModule } from 'src/app/pipes/pipes.module'
import { EnterCourseButtonModule } from 'src/app/components/buttons/enter-course/enter-course-button.module'

@NgModule({
  declarations: [CatalogueCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    PipesModule,
    StripeCheckoutModule,
    EnterCourseButtonModule
  ],
  exports: [CatalogueCardComponent]
})

export class CatalogueCardModule { }

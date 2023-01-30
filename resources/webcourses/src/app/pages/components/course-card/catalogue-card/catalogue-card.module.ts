import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CatalogueCardComponent } from './catalogue-card.component'
import { RouterModule } from '@angular/router'
import { CouponOptionModule } from '../../coupon-field/coupon-field.module'
import { BuyButtonModule } from '../../buttons/buy-button/buy-button.module'
import { PipesModule } from './../../../../shared/pipes/pipes.module'
import { CourseAccessBlockComponent } from './course-access-block/course-access-block.component'

@NgModule({
  declarations: [CatalogueCardComponent, CourseAccessBlockComponent],
  imports: [
    CommonModule,
    RouterModule,
    CouponOptionModule,
    BuyButtonModule,
    PipesModule
  ],
  exports: [CatalogueCardComponent]
})

export class CatalogueCardModule { }

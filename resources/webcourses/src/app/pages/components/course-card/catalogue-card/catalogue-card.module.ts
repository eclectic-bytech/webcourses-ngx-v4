import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

import { CatalogueCardComponent } from './catalogue-card.component'
import { BuyButtonModule } from '../../buttons/buy-button/buy-button.module'
import { PipesModule } from './../../../../shared/pipes/pipes.module'
import { CourseAccessBlockComponent } from './course-access-block/course-access-block.component'

@NgModule({
  declarations: [CatalogueCardComponent, CourseAccessBlockComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    BuyButtonModule,
    PipesModule
  ],
  exports: [CatalogueCardComponent]
})

export class CatalogueCardModule { }

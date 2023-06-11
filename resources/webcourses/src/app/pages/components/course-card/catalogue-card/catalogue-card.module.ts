import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { CatalogueCardComponent } from './catalogue-card.component'
import { PipesModule } from './../../../../shared/pipes/pipes.module'


@NgModule({
  declarations: [CatalogueCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    PipesModule
  ],
  exports: [CatalogueCardComponent]
})

export class CatalogueCardModule { }

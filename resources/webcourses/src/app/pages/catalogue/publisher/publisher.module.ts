import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublisherComponent } from './publisher.component'
import { PublisherRoutingModule } from './publisher-routing.module'
import { CatalogueCardModule } from '../../components/course-card/catalogue-card/catalogue-card.module'
import { ThemeResetModule } from './../../../core/directives/theme-reset/theme-reset.module'

@NgModule({
  declarations: [
    PublisherComponent
  ],
  imports: [
    CommonModule,
    ThemeResetModule,
    PublisherRoutingModule,
    CatalogueCardModule
  ]
})

export class PublisherModule { }

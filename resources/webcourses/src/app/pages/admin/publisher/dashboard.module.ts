import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

import { DashboardRoutingModule } from './dashboard-routing.module'
import { DiscountCodesModule } from './discount-codes/discount-codes.module'
import { PublisherModule } from '../../publisher/publisher.module'
import { PublisherProfileModule } from './profile/profile.module'
import { DashboardComponent } from './dashboard.component'
import { PublisherCoursesModule } from './courses/courses.module'

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    PublisherModule,
    PublisherProfileModule,
    NgbModule,
    NgbNavModule,
    DiscountCodesModule,
    PublisherCoursesModule
  ]
})

export class DashboardModule { }

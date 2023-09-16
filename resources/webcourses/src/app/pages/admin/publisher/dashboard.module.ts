import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

import { PublisherModule } from '../../publisher/publisher.module'
import { PublisherProfileModule } from './profile/profile.module'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardComponent } from './dashboard.component'

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
    NgbNavModule
  ]
})

export class DashboardModule { }

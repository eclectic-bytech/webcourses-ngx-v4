import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

// WNGX imports
import { DashboardComponent } from './dashboard.component'

import { DashboardRoutingModule } from './dashboard-routing.module'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DashboardRoutingModule,
    LoadingSpinnerModule
  ]
})
export class DashboardModule { }

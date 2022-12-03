import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PublisherAdminDashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    PublisherAdminDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class PublisherAdminDashboardModule { }

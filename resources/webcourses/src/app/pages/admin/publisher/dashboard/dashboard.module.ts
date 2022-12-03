import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PublisherAdminDashboardComponent } from './dashboard.component';
import { PublisherMenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    PublisherAdminDashboardComponent
  ],
  imports: [
    CommonModule,
    PublisherMenuModule,
    DashboardRoutingModule
  ]
})
export class PublisherAdminDashboardModule { }

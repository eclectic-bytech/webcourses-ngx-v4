import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublisherDashboardComponent } from './publisher/dashboard/dashboard.component';
import { DashboardComponent } from './system/dashboard/dashboard.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'publisher/dashboard',
    component: PublisherDashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

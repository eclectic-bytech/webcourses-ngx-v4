import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublisherAdminDashboardComponent } from './publisher/dashboard/dashboard.component';
import { AdminDashboardComponent } from './system/dashboard/dashboard.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'publisher/dashboard',
    component: PublisherAdminDashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

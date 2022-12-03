import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'publisher/profile',
    loadChildren: () => import('./publisher/publisher-profile-admin/publisher-profile-admin.module').then(m => m.PublisherProfileAdminModule),
    pathMatch: 'full'
  },
  {
    path: 'publisher/dashboard',
    loadChildren: () => import('./publisher/dashboard/dashboard.module').then(m => m.PublisherAdminDashboardModule),
    pathMatch: 'full'
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }

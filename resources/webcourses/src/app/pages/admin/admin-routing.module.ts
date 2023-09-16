import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'publisher/dashboard',
    loadChildren: () => import('./publisher/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'system/dashboard',
    loadChildren: () => import('./system/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }

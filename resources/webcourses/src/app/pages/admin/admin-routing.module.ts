import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'publisher/courses',
    loadChildren: () => import('./publisher/courses/courses.module').then(m => m.PublisherCoursesModule)
  },
  {
    path: 'publisher/access-codes/cid',
    loadChildren: () => import('./publisher/discount-codes/discount-codes.module').then(m => m.DiscountCodesModule)
  },
  {
    path: 'publisher/profile',
    loadChildren: () => import('./publisher/profile/profile.module').then(m => m.PublisherProfileModule)
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

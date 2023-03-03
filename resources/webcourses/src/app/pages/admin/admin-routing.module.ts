import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'publisher/profile',
    loadChildren: () => import('./publisher/profile/profile.module').then(m => m.PublisherProfileModule),
  },
  {
    path: 'publisher/courses',
    loadChildren: () => import('./publisher/courses/courses.module').then(m => m.PublisherCoursesModule),
  },
  {
    path: 'publisher/discount-codes',
    loadChildren: () => import('./publisher/discount-codes/discount-codes.module').then(m => m.DiscountCodesModule),
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { DiscountCodesComponent } from './discount-codes.component'

const routes: Routes = [
  {
    path: '',
    component: DiscountCodesComponent,
    data: {
      title: 'Discount Codes'
    },
    pathMatch: 'full'
  },
  {
    path: ':code_id/users',
    loadChildren: () => import('./discount-codes-users/discount-codes-users.module').then(m => m.DiscountCodesUsersModule),
  }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})

export class DiscountCodesRoutingModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DiscountCodesUsersRoutingModule } from './discount-codes-users-routing.module'
import { DiscountCodesUsersComponent } from './discount-codes-users.component'

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { ShowingXyzComponent } from 'src/app/core/components/pagination/showing-xyz/showing-xyz.component'

@NgModule({
  declarations: [
    DiscountCodesUsersComponent
  ],
  imports: [
    CommonModule,
    DiscountCodesUsersRoutingModule,
    NgbPaginationModule,
    ShowingXyzComponent
  ]
})
export class DiscountCodesUsersModule { }

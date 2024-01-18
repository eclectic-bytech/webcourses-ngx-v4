import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DiscountCodesUsersRoutingModule } from './discount-codes-users-routing.module'
import { DiscountCodesUsersComponent } from './discount-codes-users.component'

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { PaginationCustomModule } from 'src/app/core/components/pagination-custom/pagination-custom.module'


@NgModule({
  declarations: [
    DiscountCodesUsersComponent
  ],
  imports: [
    CommonModule,
    DiscountCodesUsersRoutingModule,
    NgbPaginationModule,
    PaginationCustomModule
  ]
})
export class DiscountCodesUsersModule { }

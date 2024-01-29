import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DiscountCodesUsersRoutingModule } from './discount-codes-users-routing.module'
import { DiscountCodesUsersComponent } from './discount-codes-users.component'

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { ShowingModule } from 'src/app/components/pagination/showing/showing.module'

@NgModule({
  declarations: [
    DiscountCodesUsersComponent
  ],
  imports: [
    CommonModule,
    DiscountCodesUsersRoutingModule,
    NgbPaginationModule,
    ShowingModule
  ]
})
export class DiscountCodesUsersModule { }

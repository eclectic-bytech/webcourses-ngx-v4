import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountCodesUsersRoutingModule } from './discount-codes-users-routing.module';
import { DiscountCodesUsersComponent } from './discount-codes-users.component';


@NgModule({
  declarations: [
    DiscountCodesUsersComponent
  ],
  imports: [
    CommonModule,
    DiscountCodesUsersRoutingModule
  ]
})
export class DiscountCodesUsersModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PaginationCustomComponent } from './pagination-custom.component'

@NgModule({
  declarations: [
    PaginationCustomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationCustomComponent
  ]
})

export class PaginationCustomModule { }

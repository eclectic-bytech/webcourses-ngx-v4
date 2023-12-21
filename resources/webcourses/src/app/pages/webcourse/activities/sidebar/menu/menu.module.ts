import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StudentMenuModule } from './student/student-menu.module'
import { MenuComponent } from './menu.component'


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    StudentMenuModule
  ],
  exports: [
    MenuComponent
  ]
})

export class MenuModule { }

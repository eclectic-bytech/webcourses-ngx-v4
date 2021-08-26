import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MyCoursesCardComponent } from './my-courses-card.component'
import { PipesModule } from './../../../../shared/pipes/pipes.module'

@NgModule({
  declarations: [
    MyCoursesCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    MyCoursesCardComponent
  ]
})

export class MyCoursesCardModule { }

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { WebcourseComponent } from './webcourse.component'

const routes: Routes = [
  {
    path: ':aid',
    component: WebcourseComponent
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

export class WebcourseRoutingModule { }

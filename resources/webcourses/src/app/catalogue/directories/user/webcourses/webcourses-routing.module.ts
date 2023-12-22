import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { WebcoursesComponent } from './webcourses.component'

const routes: Routes = [
  {
    path: '',
    component: WebcoursesComponent,
    data: {
      title: 'My web courses'
    }
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
export class WebcoursesRoutingModule { }

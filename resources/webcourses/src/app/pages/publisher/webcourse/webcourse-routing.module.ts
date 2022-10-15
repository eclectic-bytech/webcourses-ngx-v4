import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CommonModule } from '@angular/common'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
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

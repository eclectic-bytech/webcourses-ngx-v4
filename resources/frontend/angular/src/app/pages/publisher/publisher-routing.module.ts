import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CommonModule } from '@angular/common'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'webcourses'
  },
  {
    path: 'webcourses',
    loadChildren: () => import('./webcourses/webcourses.module').then(m => m.WebcoursesModule)
  },
  {
    path: 'webcourse/:cid/students',
    loadChildren: () => import('./webcourse/students/students.module').then(m => m.StudentsModule),
  },
  {
    path: 'webcourse/:cid/student/:uid',
    loadChildren: () => import('./webcourse/student/student.module').then(m => m.StudentModule),
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
export class PublisherRoutingModule { }

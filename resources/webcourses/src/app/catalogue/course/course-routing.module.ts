import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { CourseComponent } from './course.component'

const routes: Routes = [
  {
    path: ':cid',
    component: CourseComponent,
    data: {
      title: 'Course Details'
    }
  },
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})

export class CourseRoutingModule { }

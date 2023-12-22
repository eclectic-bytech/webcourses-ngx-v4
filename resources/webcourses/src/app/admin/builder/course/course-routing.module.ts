import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CourseComponent } from './course.component'

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    title: 'Build a new course (Cultivate Learning)'
  },
  {
    path: 'edit/:cid',
    component: CourseComponent,
    title: 'Edit Course (Cultivate Learning)'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CourseRoutingModule { }

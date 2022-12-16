import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { PublisherCoursesComponent } from './courses.component'

const routes: Routes = [
  {
    path: '',
    component: PublisherCoursesComponent,
    data: {
      title: 'Publisher CoursesProfile'
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

export class PublisherCoursesRoutingModule { }

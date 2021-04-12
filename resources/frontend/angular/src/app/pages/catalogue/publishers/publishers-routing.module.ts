import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { PublishersComponent } from './publishers.component'
// import { PublisherCoursesResolver } from './publisher-courses.resolver'

const routes: Routes = [
  {
    path: '',
    component: PublishersComponent,
    // resolve: {
    //   webcoursesAll: PublisherCoursesResolver
    // },
    data: {
      title: 'Publishers at Cultivate Learning',
      theme_id: 0
    }
  },
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule],
  // providers: [PublisherCoursesResolver]
})

export class PublishersRoutingModule { }

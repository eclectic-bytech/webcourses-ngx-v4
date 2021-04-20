import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { WebcoursesComponent } from './webcourses.component'
import { WebcoursesResolver } from './webcourses.resolver'
import { PublisherResolver } from './../../catalogue/publisher/publisher.resolver'

const routes: Routes = [
  {
    path: '',
    component: WebcoursesComponent,
    resolve: {
      webcourses: WebcoursesResolver,
      publisherInfo: PublisherResolver
    },
    data: {
      title: 'Publisher webcourses'
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
  providers: [WebcoursesResolver, PublisherResolver]
})

export class WebcoursesRoutingModule { }

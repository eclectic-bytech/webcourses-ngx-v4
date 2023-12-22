import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { CatalogueComponent } from './catalogue.component'
import { CatalogueResolver } from './catalogue.resolver'

const routes: Routes = [
  {
    path: '',
    component: CatalogueComponent,
    resolve: {
      webcoursesAll: CatalogueResolver
    },
    data: {
      title: 'Cultivate Learning Web Course Catalogue'
    },
  },
  {
    path: 'publisher',
    loadChildren: () => import('./directories/publisher/publisher.module').then(m => m.PublisherModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule],
  providers: [CatalogueResolver]
})

export class CatalogueRoutingModule { }

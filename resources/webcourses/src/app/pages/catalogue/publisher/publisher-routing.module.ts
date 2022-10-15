import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { PublisherComponent } from './publisher.component'
import { CatalogueResolver } from './../catalogue.resolver'
import { PublisherResolver } from './publisher.resolver'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/catalogue/publishers',
    pathMatch: 'full'
  },
  {
    path: ':pub_id',
    component: PublisherComponent,
    resolve: {
      publisherCourses: CatalogueResolver,
      publisherInfo: PublisherResolver
    },
    data: {
      title: 'Publisher Catalogue'
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
  providers: [PublisherResolver, CatalogueResolver]
})

export class PublisherRoutingModule { }

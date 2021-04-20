import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HelpComponent } from './help.component'
import { PublisherResolver } from '../catalogue/publisher/publisher.resolver'

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    data: {
      title: 'Cultivate Learning Help'
    }
  },
  {
    path: ':pub_id',
    component: HelpComponent,
    data: {
      title: 'Help'
    },
    resolve: {
      publisherInfo: PublisherResolver
    }
  }
]

@NgModule({
  declarations: [],
  providers: [PublisherResolver],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})

export class HelpRoutingModule { }

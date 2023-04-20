import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PublishComponent } from './publish.component'

const routes: Routes = [
  {
    path: '',
    component: PublishComponent,
    data: {
      title: 'Cultivate Learning: publish with us'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishRoutingModule { }

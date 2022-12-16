import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { PublisherProfileComponent } from './profile.component'

const routes: Routes = [
  {
    path: '',
    component: PublisherProfileComponent,
    data: {
      title: 'Publisher Profile'
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

export class PublisherProfileRoutingModule { }

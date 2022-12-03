import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { PublisherProfileAdminComponent } from './publisher-profile-admin.component'

const routes: Routes = [
  {
    path: '',
    component: PublisherProfileAdminComponent,
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

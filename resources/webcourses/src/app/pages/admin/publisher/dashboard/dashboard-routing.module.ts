import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { PublisherAdminDashboardComponent } from './dashboard.component'

const routes: Routes = [
  {
    path: '',
    component: PublisherAdminDashboardComponent,
    data: {
      title: 'Cultivate Learning Help'
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

export class DashboardRoutingModule { }

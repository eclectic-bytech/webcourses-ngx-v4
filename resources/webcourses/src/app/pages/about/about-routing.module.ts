import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about.component'

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: {
      title: 'About Contact Cultivate'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }

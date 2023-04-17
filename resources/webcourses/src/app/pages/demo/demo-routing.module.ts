import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DemoComponent } from './demo.component'

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    data: {
      title: 'Contact Cultivate Demo'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DemoRoutingModule { }

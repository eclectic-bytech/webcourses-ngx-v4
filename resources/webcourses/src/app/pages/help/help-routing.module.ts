import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HelpComponent } from './help.component'

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
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})

export class HelpRoutingModule { }

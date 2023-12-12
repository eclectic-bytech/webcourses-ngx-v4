import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UnderConstructionComponent } from './under-construction.component'

const routes: Routes = [
  {
    path: '',
    component: UnderConstructionComponent,
    title: 'Under construction - sorry.'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UnderConstructionRoutingModule { }

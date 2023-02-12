import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ActivitiesComponent } from './activities.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'selected',
    pathMatch: 'full'
  },
  {
    path: ':aid',
    component: ActivitiesComponent
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

export class ActivitiesRoutingModule { }

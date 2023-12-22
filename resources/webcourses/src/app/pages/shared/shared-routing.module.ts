import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedComponent } from './shared.component'

const routes: Routes = [
  {
    path: '',
    component: SharedComponent,
    data: {
      title: 'Cultivate Learning Help'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WebcourseComponent } from './webcourse.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: '',
    component: WebcourseComponent,
    children: [
      {
        path: 'activities',
        loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule)
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebcourseRoutingModule { }

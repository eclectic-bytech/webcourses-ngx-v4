import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'webcourses',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'webcourses',
        loadChildren: () => import('./webcourses/webcourses.module').then(m => m.WebcoursesModule)
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UserRoutingModule { }

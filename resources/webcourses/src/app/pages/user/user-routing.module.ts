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
      },
      {
        path: 'webcourse',
        loadChildren: () => import('./webcourse/enrol-message/enrol-message.module').then(m => m.EnrolMessageModule)
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UserRoutingModule { }

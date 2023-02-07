import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WebcourseComponent } from './webcourse.component'
import { AuthUserGuard } from 'src/app/core/auth/auth-user.guard'

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
        canActivate: [AuthUserGuard],
        loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule)
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthUserGuard]
})

export class WebcourseRoutingModule { }

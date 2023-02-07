import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ActivitiesComponent } from './activities.component'
import { AuthUserGuard } from 'src/app/core/auth/auth-user.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'selected',
    pathMatch: 'full'
  },
  {
    path: ':aid',
    canActivate: [AuthUserGuard],
    component: ActivitiesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule],
  providers: [AuthUserGuard]
})

export class ActivitiesRoutingModule { }

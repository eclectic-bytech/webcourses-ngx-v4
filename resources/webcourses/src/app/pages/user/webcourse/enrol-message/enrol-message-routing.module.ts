import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { EnrolMessageComponent } from './enrol-message.component'
import { EnrolMessageResolver } from './enrol-message.resolver'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/catalogue',
    pathMatch: 'full'
  },
  {
    path: ':cid/welcome',
    component: EnrolMessageComponent,
    data: {
      title: 'Welcome to course '
    },
    resolve: {
      enrolMessage: EnrolMessageResolver,
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  providers: [
    EnrolMessageResolver
  ],
  exports: [RouterModule]
})

export class EnrolMessageRoutingModule { }

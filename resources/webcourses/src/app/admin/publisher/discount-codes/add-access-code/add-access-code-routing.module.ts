import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddAccessCodeComponent } from './add-access-code.component'

const routes: Routes = [
  {
    path: '',
    component: AddAccessCodeComponent,
    data: {
      title: 'Add Access Code'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddAccessCodeRoutingModule { }

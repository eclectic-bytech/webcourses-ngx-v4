import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactComponent } from './contact.component'

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    data: {
      title: 'Contact Cultivate Learning'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

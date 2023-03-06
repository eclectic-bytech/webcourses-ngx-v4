import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProgressComponent } from './user-progress.component';

const routes: Routes = [
  {
    path: '{pid}',
    component: UserProgressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProgressRoutingModule { }

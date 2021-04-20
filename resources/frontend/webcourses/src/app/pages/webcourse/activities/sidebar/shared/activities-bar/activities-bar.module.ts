import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ActivitiesBarComponent } from './activities-bar.component'

@NgModule({
  declarations: [ActivitiesBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ActivitiesBarComponent]
})
export class ActivitiesBarModule { }

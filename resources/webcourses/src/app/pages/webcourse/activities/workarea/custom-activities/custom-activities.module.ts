import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CustomActivitiesComponent } from './custom-activities.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [CustomActivitiesComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ CustomActivitiesComponent ]
})

export class CustomActivitiesModule { }

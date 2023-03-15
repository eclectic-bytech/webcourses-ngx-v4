import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

// WNGX imports
import { CustomActivitiesComponent } from './custom-activities.component'

@NgModule({
  declarations: [CustomActivitiesComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ CustomActivitiesComponent ]
})

export class CustomActivitiesModule { }

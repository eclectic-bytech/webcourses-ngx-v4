import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SelectedComponent } from './selected.component'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'
import { ActivitiesBarModule } from 'src/app/webcourse/sidebar/shared/activities-bar/activities-bar.module'

@NgModule({
  declarations: [
    SelectedComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    LoadingSpinnerModule,
    ActivitiesBarModule
  ],
  exports: [SelectedComponent]
})
export class SelectedModule { }

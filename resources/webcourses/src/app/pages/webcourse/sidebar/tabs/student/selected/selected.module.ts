import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SelectedComponent } from './selected.component'
import { LoadingSpinnerModule } from '../../../../../../core/modules/loading-spinner/loading-spinner.module'
import { ActivitiesBarModule } from '../../../shared/activities-bar/activities-bar.module'

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

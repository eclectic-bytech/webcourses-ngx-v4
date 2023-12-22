import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivityHelpComponent } from './activity-help.component'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'

@NgModule({
  declarations: [ActivityHelpComponent],
  imports: [
    CommonModule,
    LoadingSpinnerModule
  ],
  exports: [ActivityHelpComponent]
})

export class ActivityHelpModule { }

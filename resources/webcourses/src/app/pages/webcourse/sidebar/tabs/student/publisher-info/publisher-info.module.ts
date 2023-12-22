import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublisherInfoComponent } from './publisher-info.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { LoadingSpinnerModule } from '../../../../../../core/modules/loading-spinner/loading-spinner.module'

@NgModule({
  declarations: [PublisherInfoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    LoadingSpinnerModule
  ],
  exports: [PublisherInfoComponent]
})

export class PublisherInfoModule { }

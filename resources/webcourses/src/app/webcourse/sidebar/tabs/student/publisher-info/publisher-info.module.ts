import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublisherInfoComponent } from './publisher-info.component'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'

@NgModule({
  declarations: [PublisherInfoComponent],
  imports: [
    CommonModule,
    LoadingSpinnerModule
  ],
  exports: [PublisherInfoComponent]
})

export class PublisherInfoModule { }

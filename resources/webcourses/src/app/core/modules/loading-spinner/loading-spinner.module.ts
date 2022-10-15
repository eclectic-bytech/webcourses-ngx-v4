import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { LoadingSpinnerComponent } from './loading-spinner.component'

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [LoadingSpinnerComponent]
})

export class LoadingSpinnerModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// WNGX imports
import { CompletionCertComponent } from './completion-cert.component'

@NgModule({
  declarations: [
    CompletionCertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompletionCertComponent
  ]
})

export class CompletionCertModule { }

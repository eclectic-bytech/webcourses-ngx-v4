import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

// WNGX imports
import { CompletionCertComponent } from './completion-cert.component'

@NgModule({
  declarations: [
    CompletionCertComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CompletionCertComponent
  ]
})

export class CompletionCertModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// WNGX imports
import { BeforeAndAfterModule } from './before-and-after/before-and-after.module'
import { CompletionCertModule } from './completion-cert/completion-cert.module'

import { SpecialActivityComponent } from './special-activity.component'

@NgModule({
  declarations: [
    SpecialActivityComponent
  ],
  imports: [
    CommonModule,
    BeforeAndAfterModule,
    CompletionCertModule
  ],
  exports: [
    SpecialActivityComponent
  ]
})

export class SpecialActivityModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReviewModeComponent } from './review-mode.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { PipesModule } from 'src/app/pipes/pipes.module'

@NgModule({
  declarations: [
    ReviewModeComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    FontAwesomeModule
  ],
  exports: [
    ReviewModeComponent
  ]
})
export class ReviewModeModule { }

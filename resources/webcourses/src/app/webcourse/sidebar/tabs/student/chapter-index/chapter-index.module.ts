import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ActivitiesBarModule } from 'src/app/webcourse/sidebar/shared/activities-bar/activities-bar.module'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'

import { ChapterIndexComponent } from './chapter-index.component'

@NgModule({
  declarations: [ChapterIndexComponent],
  imports: [
    CommonModule,
    RouterModule,
    ActivitiesBarModule,
    LoadingSpinnerModule
  ],
  exports: [
    ChapterIndexComponent
  ]
})
export class ChapterIndexModule { }

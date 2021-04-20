import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WorkAreaComponent } from './workarea.component'
import { ActiveModeModule } from './active-mode/active-mode.module'
import { ReviewModeModule } from './review-mode/review-mode.module'
import { PipesModule } from './../../../../shared/pipes/pipes.module'
import { NavModule } from './nav/nav.module'
import { DndModule } from './activities/dnd/dnd.module'
import { ChapterEndComponent } from './components/chapter-end/chapter-end.component'
import { CourseEndComponent } from './components/course-end/course-end.component'
import { CustomActivitiesModule } from './custom-activities/custom-activities.module'
import { ClickRotateModule } from './activities/click-rotate/click-rotate.module'

@NgModule({
  declarations: [WorkAreaComponent, ChapterEndComponent, CourseEndComponent],
  imports: [
    CommonModule,
    ReviewModeModule,
    ActiveModeModule,
    NavModule,
    PipesModule,
    DndModule,
    ClickRotateModule,
    CustomActivitiesModule
  ],
  exports: [WorkAreaComponent]
})
export class WorkAreaModule { }

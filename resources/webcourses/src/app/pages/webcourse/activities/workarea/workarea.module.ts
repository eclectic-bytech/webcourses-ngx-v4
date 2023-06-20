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
import { ClickRotateModule } from './activities/click-rotate/click-rotate.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { DemoFlagModule } from '../../builder/activity/demo-flag/demo-flag.module';
import { SpecialActivityModule } from './activities/special-activity/special-activity.module'
import { BookmarkButtonModule } from 'src/app/pages/components/buttons/bookmark-button/bookmark-button.module'

@NgModule({
  declarations: [
    WorkAreaComponent,
    ChapterEndComponent,
    CourseEndComponent
  ],
  imports: [
    CommonModule,
    ReviewModeModule,
    ActiveModeModule,
    NavModule,
    PipesModule,
    DndModule,
    ClickRotateModule,
    FontAwesomeModule,
    DemoFlagModule,
    SpecialActivityModule,
    BookmarkButtonModule
  ],
  exports: [
    WorkAreaComponent,
    SpecialActivityModule
  ]
})
export class WorkAreaModule { }

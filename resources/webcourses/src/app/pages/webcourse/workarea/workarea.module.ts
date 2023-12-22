import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { WorkAreaComponent } from './workarea.component'
import { ActiveModeModule } from 'src/app/pages/webcourse/workarea/student/active-mode/active-mode.module'
import { ReviewModeModule } from 'src/app/pages/webcourse/workarea/student/review-mode/review-mode.module'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'
import { NavModule } from 'src/app/pages/webcourse/workarea/nav/student/nav.module'
import { DndModule } from 'src/app/pages/webcourse/workarea/student/activities/dnd/dnd.module'
import { ChapterEndComponent } from 'src/app/pages/webcourse/workarea/student/components/chapter-end/chapter-end.component'
import { CourseEndComponent } from 'src/app/pages/webcourse/workarea/student/components/course-end/course-end.component'
import { ClickRotateModule } from 'src/app/pages/webcourse/workarea/student/activities/click-rotate/click-rotate.module'
import { DemoFlagModule } from 'src/app/pages/webcourse/builder/activity/demo-flag/demo-flag.module'
import { SpecialActivityModule } from 'src/app/pages/webcourse/workarea/student/activities/special-activity/special-activity.module'
import { BookmarkButtonModule } from 'src/app/pages/webcourse/sidebar/tabs/student/bookmarks/bookmark-button/bookmark-button.module'

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

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentMenuComponent } from './student-menu.component'

import { SelectedModule } from '../../tabs/student/selected/selected.module'
import { ChapterIndexModule } from '../../tabs/student/chapter-index/chapter-index.module'
import { PublisherInfoModule } from '../../tabs/student/publisher-info/publisher-info.module'
import { BookmarksModule } from '../../tabs/student/bookmarks/bookmarks.module'
import { ActivityHelpModule } from '../../tabs/student/activity-help/activity-help.module'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    StudentMenuComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SelectedModule,
    ChapterIndexModule,
    PublisherInfoModule,
    BookmarksModule,
    ActivityHelpModule
  ],
  exports: [
    StudentMenuComponent
  ]
})

export class StudentMenuModule { }

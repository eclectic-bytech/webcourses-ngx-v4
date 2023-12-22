import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// WNGX imports
import { StudentMenuComponent } from './student-menu.component'
import { SelectedModule } from 'src/app/webcourse/sidebar/tabs/student/selected/selected.module'
import { ChapterIndexModule } from 'src/app/webcourse/sidebar/tabs/student/chapter-index/chapter-index.module'
import { PublisherInfoModule } from 'src/app/webcourse/sidebar/tabs/student/publisher-info/publisher-info.module'
import { BookmarksModule } from 'src/app/webcourse/sidebar/tabs/student/bookmarks/bookmarks.module'
import { ActivityHelpModule } from 'src/app/webcourse/sidebar/tabs/student/activity-help/activity-help.module'


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

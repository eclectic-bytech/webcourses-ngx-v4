import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WebcourseRoutingModule } from './webcourse-routing.module'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { WorkAreaModule } from './workarea/workarea.module'
import { ThemeModule } from 'src/app/views/theme/theme.module'
import { ActivityHelpModule } from 'src/app/webcourse/sidebar/tabs/student/activity-help/activity-help.module'
import { PipesModule } from 'src/app/pipes/pipes.module'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'
import { MenuModule } from 'src/app/webcourse/sidebar/menu/menu.module'

import { WebcourseComponent } from './webcourse.component'
import { CollectUserNamesComponent } from 'src/app/webcourse/workarea/student/components/collect-user-names/collect-user-names.component'
import { BookmarksModule } from 'src/app/webcourse/sidebar/tabs/student/bookmarks/bookmarks.module'

@NgModule({
  declarations: [
    WebcourseComponent,
    CollectUserNamesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    WebcourseRoutingModule,
    WorkAreaModule,
    ThemeModule,
    ActivityHelpModule,
    PipesModule,
    LoadingSpinnerModule,
    MenuModule,
    BookmarksModule
  ],
  providers: [
  ],
  exports: [
    FormsModule,
    CollectUserNamesComponent
  ]
})

export class WebcourseModule { }

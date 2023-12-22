import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivitiesRoutingModule } from './activities-routing.module'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { WorkAreaModule } from './workarea/workarea.module'
import { ThemeModule } from 'src/app/views/theme/theme.module'
import { ActivityHelpModule } from 'src/app/pages/webcourse/activities/sidebar/tabs/student/activity-help/activity-help.module'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'
import { MenuModule } from 'src/app/pages/webcourse/activities/sidebar/menu/menu.module'

import { ActivitiesComponent } from './activities.component'
import { CollectUserNamesComponent } from 'src/app/pages/webcourse/activities/workarea/student/components/collect-user-names/collect-user-names.component'
import { BookmarksModule } from 'src/app/pages/webcourse/activities/sidebar/tabs/student/bookmarks/bookmarks.module'

@NgModule({
  declarations: [
    ActivitiesComponent,
    CollectUserNamesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ActivitiesRoutingModule,
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

export class ActivitiesModule { }

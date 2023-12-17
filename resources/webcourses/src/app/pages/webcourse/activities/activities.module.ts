import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivitiesRoutingModule } from './activities-routing.module'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { WorkAreaModule } from './workarea/workarea.module'
import { ThemeModule } from '../../../views/theme/theme.module'
import { ActivityHelpModule } from './sidebar/tabs/student/activity-help/activity-help.module'
import { PipesModule } from './../../../shared/pipes/pipes.module'
import { LoadingSpinnerModule } from './../../../core/modules/loading-spinner/loading-spinner.module'
import { StudentMenuModule } from './sidebar/menu/student/student-menu.module'

import { ActivitiesComponent } from './activities.component'
import { CollectUserNamesComponent } from './components/collect-user-names/collect-user-names.component'
import { BookmarksModule } from './sidebar/tabs/student/bookmarks/bookmarks.module'

@NgModule({
  declarations: [
    ActivitiesComponent,
    CollectUserNamesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    ActivitiesRoutingModule,
    WorkAreaModule,
    ThemeModule,
    ActivityHelpModule,
    PipesModule,
    LoadingSpinnerModule,
    StudentMenuModule,
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

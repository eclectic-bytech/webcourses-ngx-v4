import { Component, Input } from '@angular/core'

// WNGX services
import { UserService } from 'src/app/core/services/user/user.service'
import { CompletionStatsService } from 'src/app/core/services/user/completion-stats.service'
import { NavService } from '../../../workarea/nav/nav.service'

// WNGX models and misc
import { ActivityMeta } from '../../../workarea/models/activity-meta.model'
import { Chapter } from 'src/app/pages/webcourse/activities/models/chapter.model'

@Component({
  selector: 'app-activities-bar',
  templateUrl: './activities-bar.component.html',
  styleUrls: ['./activities-bar.component.scss']
})
export class ActivitiesBarComponent {

  @Input() chapter: Chapter
  maxWidthPercent = 94

  constructor(
    public completionStatsService: CompletionStatsService,
    public user: UserService,
    private navService: NavService
  ) { }

  activityBarClick(activityMeta: ActivityMeta) {
    if (activityMeta.seq <= this.tac) {
      this.navService.NavigateByAid(activityMeta.activity_id)
    }
  }

  lockStatusClass(activityMeta: ActivityMeta) {
    return (activityMeta.seq <= this.tac) ? 'unlocked' : 'locked'
  }

  get tac() {
    return this.completionStatsService.totalActivitiesCompleted
  }

}

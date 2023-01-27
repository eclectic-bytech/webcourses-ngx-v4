import { Component, Input } from '@angular/core'
import { Chapter } from 'src/app/pages/webcourse/activities/models/chapter.model'
import { SelectedService } from 'src/app/pages/webcourse/activities/sidebar/selected/selected.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { CompletionStatsService } from 'src/app/core/services/user/completion-stats.service'
import { WorkareaService } from 'src/app/pages/webcourse/activities/workarea/workarea.service'
import { ActivityMeta } from '../../../workarea/models/activity-meta.model'

@Component({
  selector: 'app-activities-bar',
  templateUrl: './activities-bar.component.html',
  styleUrls: ['./activities-bar.component.scss']
})
export class ActivitiesBarComponent {

  @Input() chapter: Chapter
  maxWidthPercent = 94

  constructor(
    public workareaService: WorkareaService,
    public selectedService: SelectedService,
    public completionStatsService: CompletionStatsService,
    public user: UserService
  ) { }

  activityBarClick(activityMeta: ActivityMeta) {
    if (activityMeta.seq <= this.tac) {
      this.workareaService.loadActivities(activityMeta.activity_id)
    }
  }

  lockStatusClass(activityMeta: ActivityMeta) {
    return (activityMeta.seq <= this.tac) ? 'unlocked' : 'locked'
  }

  get tac() {
    return this.completionStatsService.totalActivitiesCompleted
  }

}

import { Component, Input } from '@angular/core'
import { Chapter } from '../../../models/chapter.model'
import { SelectedService } from '../../selected/selected.service'
import { UserService } from '../../../../../../core/services/user/user.service'
import { CompletionStatsService } from '../../../../../../core/services/user/completion-stats.service'
import { WorkareaService } from '../../../workarea/workarea.service'

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

}

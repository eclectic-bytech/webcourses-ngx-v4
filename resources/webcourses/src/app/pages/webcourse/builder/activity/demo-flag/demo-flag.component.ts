import { Component, Input } from '@angular/core'
import { ActivityMeta } from '../../../activities/workarea/models/activity-meta.model'
import { DemoFlagService } from './demo-flag.service'

@Component({
  selector: 'app-demo-flag',
  templateUrl: './demo-flag.component.html',
  styleUrls: ['./demo-flag.component.sass']
})
export class DemoFlagComponent {

  @Input() activityMeta: ActivityMeta

  constructor(
    private demoFlagService: DemoFlagService
  ) { }

  activityDemoFlagToggle() {
    this.demoFlagService.saveActivityDemoStatus(this.activityMeta.activity_id)
  }

}

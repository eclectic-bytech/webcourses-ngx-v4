import { Component, Input } from '@angular/core'
import { DemoFlagService } from './demo-flag.service'
import { Activity } from '../../../activities/workarea/models/activity.model'

@Component({
  selector: 'app-demo-flag',
  templateUrl: './demo-flag.component.html',
  styleUrls: ['./demo-flag.component.sass']
})
export class DemoFlagComponent {

  @Input() firstActivity: Activity

  constructor(
    private demoFlagService: DemoFlagService
  ) { }

  activityDemoFlagToggle() {
    this.demoFlagService.saveActivityDemoStatus(this.firstActivity.meta.activity_id)
  }

}

import { Component, Input } from '@angular/core';
import { ActivityMeta } from '../../../activities/workarea/models/activity-meta.model';

@Component({
  selector: 'app-demo-flag',
  templateUrl: './demo-flag.component.html',
  styleUrls: ['./demo-flag.component.sass']
})
export class DemoFlagComponent {

  @Input() activityMeta: ActivityMeta

  constructor() { }

  saveDemoActivityStatus(demoActivity: boolean) {
    console.log(demoActivity)
  }

}

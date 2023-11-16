import { Component } from '@angular/core'
import { DemoFlagService } from './demo-flag.service'

@Component({
  selector: 'app-demo-flag',
  templateUrl: './demo-flag.component.html',
  styleUrls: ['./demo-flag.component.sass']
})
export class DemoFlagComponent {

  constructor(
    private demoFlagService: DemoFlagService
  ) { }

  activityDemoFlagToggle() {
    this.demoFlagService.saveActivityDemoStatus()
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActivityMeta } from '../../../activities/workarea/models/activity-meta.model';

@Component({
  selector: 'app-demo-flag',
  templateUrl: './demo-flag.component.html',
  styleUrls: ['./demo-flag.component.sass']
})
export class DemoFlagComponent implements OnInit {

  @Input() activityMeta: ActivityMeta

  constructor() { }

  ngOnInit(): void {
  }

}

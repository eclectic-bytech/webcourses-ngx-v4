import { Component, Input } from '@angular/core'
import { Activity } from 'src/app/webcourse/models/activity.model'

@Component({
  selector: 'app-special-activity',
  templateUrl: './special-activity.component.html',
  styleUrls: ['./special-activity.component.sass']
})
export class SpecialActivityComponent {

  @Input() activity: Activity

  constructor() { }

}

import { Component, OnInit, Input } from '@angular/core'
import { Activity } from '../../models/activity.model'

@Component({
  selector: 'app-special-activity',
  templateUrl: './special-activity.component.html',
  styleUrls: ['./special-activity.component.sass']
})
export class SpecialActivityComponent implements OnInit {

  @Input() activity: Activity

  constructor() { }

  ngOnInit(): void {
  }

}

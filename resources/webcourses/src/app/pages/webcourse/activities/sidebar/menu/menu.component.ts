import { Component } from '@angular/core'
import { ActivitiesService } from '../../activities.service'

@Component({
  selector: 'wngx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    public activitiesService: ActivitiesService
  ) {}

}

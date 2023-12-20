import { Component } from '@angular/core'
import { WebcourseService } from '../../../webcourse.service'
import { ActivitiesService } from '../../activities.service'

@Component({
  selector: 'wngx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    public webcourseService: WebcourseService,
    public activitiesService: ActivitiesService
  ) {}

}

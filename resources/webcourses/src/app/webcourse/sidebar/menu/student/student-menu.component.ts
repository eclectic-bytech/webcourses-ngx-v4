import { Component } from '@angular/core'

// WNGX imports
import { ActivitiesService } from 'src/app/webcourse/activities.service'

@Component({
  selector: 'wngx-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./../menu.component.scss']
})
export class StudentMenuComponent {

  constructor(
    public activitiesService: ActivitiesService
  ) {}

}

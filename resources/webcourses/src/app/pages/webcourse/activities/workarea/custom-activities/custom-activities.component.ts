import { Component, OnInit, Input } from '@angular/core'
import { Activity } from '../models/activity.model'
import { CustomActivitiesService } from './custom-activities.service'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FadeInOut } from './../../../../../core/animations/fade-in-out.animation'
import { UserService } from './../../../../../core/services/user/user.service'
import { CompletionCertificatesService } from './../../../../../core/services/completion-certificates/completion-certificates.service'

@Component({
  selector: 'app-custom-activities',
  templateUrl: './custom-activities.component.html',
  styleUrls: ['./custom-activities.component.scss'],
  animations: [FadeInOut]
})
export class CustomActivitiesComponent implements OnInit {

  @Input() activity: Activity
  public faSpinner = faSpinner

  constructor(
    public customActivitiesService: CustomActivitiesService,
    public completionCertificatesService: CompletionCertificatesService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.customActivitiesService.activityRouter(this.activity)
  }

}

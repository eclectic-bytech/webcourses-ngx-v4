import { Component, Input, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

// WNGX imports
import { Activity } from 'src/app/webcourse/models/activity.model'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-before-and-after',
  templateUrl: './before-and-after.component.html',
  styleUrls: ['./before-and-after.component.sass']
})
export class BeforeAndAfterComponent implements OnInit {

  @Input() activity: Activity

  faSpinner = faSpinner

  public beforeAfter$: Observable<any>
  public awaitingStats = false

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.beforeAfter$ = this.beforeAfter()
  }

  beforeAfter() {
    return this.httpClient.get(this.url).pipe(data => data)
  }

  get url() {
    return `${this.configService.params.api.route}/webcourse/activities/special/before-and-after/${this.activity.id}`
  }
}

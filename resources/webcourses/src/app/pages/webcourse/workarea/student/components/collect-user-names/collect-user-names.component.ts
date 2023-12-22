import { Component, Input, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { HttpClient } from '@angular/common/http'

import { ConfigService } from 'src/app/core/services/config/config.service'
import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-collect-user-names',
  templateUrl: './collect-user-names.component.html',
  styleUrls: ['./collect-user-names.component.scss'],
  animations: [FadeInOut]
})
export class CollectUserNamesComponent implements OnInit {

  @Input() user: JetstreamUser

  // Used in HTML template, options are: prompt, updating, failedUpdate, saved
  status = 'prompt'
  percent = 100

  constructor(
    private ngbModal: NgbModal,
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
  }

  btnClick(names) {
    this.status = 'updating'

    this.httpClient.post(`${this.configService.params.api.route}/user/profile/user_name`, names).subscribe(
      (user: JetstreamUser) => {
        this.status = 'saved'
        this.user = user
        this.countDown(true)
      },
      (error) => {
        this.status = 'failedUpdate'
        this.countDown(false)
        console.log(error)
      }
    )
  }

  countDown(success: boolean) {
    let countDown = setInterval(() => {
      this.percent--
      if (this.percent < 0) {
        clearInterval(countDown)
        setTimeout(() => {
          success ? this.ngbModal.dismissAll() : location.reload()
        }, 1000)
      }
    }, 20)
  }

}

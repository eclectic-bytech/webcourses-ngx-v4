import { Component, Input, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { HttpClient } from '@angular/common/http'

import { ConfigService } from './../../../../../core/services/config/config.service'
import { User } from 'src/app/core/models/user.model'
import { UserService } from '../../../../../core/services/user/user.service'

@Component({
  selector: 'app-collect-user-names',
  templateUrl: './collect-user-names.component.html',
  styleUrls: ['./collect-user-names.component.scss']
})
export class CollectUserNamesComponent implements OnInit {

  @Input() user: User

  // Used in HTML template, options are: prompt, updating, failedUpdate, saved
  status = 'prompt'
  percent = 100

  constructor(
    private ngbModal: NgbModal,
    private userService: UserService,
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
  }

  btnClick(names) {
    this.status = 'updating'

    this.httpClient.post(`${this.configService.params.api.route}/user/profile/user_name`, names).subscribe(
      (user: User) => {
        this.status = 'saved'
        this.userService.user$.next(user)
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
        }, 600)
      }
    }, 20)
  }

}

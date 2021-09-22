import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { HttpClient } from '@angular/common/http'

import { ConfigService } from './../../../../../core/services/config/config.service'
import { UserService } from '../../../../../core/services/user/user.service'

@Component({
  selector: 'app-collect-user-names',
  templateUrl: './collect-user-names.component.html',
  styleUrls: ['./collect-user-names.component.scss']
})
export class CollectUserNamesComponent implements OnInit {

  waitingForAPI = false
  failedUpdate = false
  first_name = ''

  constructor(
    private ngbModal: NgbModal,
    private httpClient: HttpClient,
    private configService: ConfigService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  btnClick(names) {
    this.waitingForAPI = true
    this.httpClient.post(`${this.configService.params.api.route}/user/profile/user_name`, names).subscribe(
      (saved) => {
        if (saved) {
          this.first_name = names.first_name
          this.waitingForAPI = false
          this.userService.getUser().subscribe(
            (data) => {
              this.userService.user$.next(data)
            },
            (err) => {
              console.log(err)
            }
          )

        } else {
          this.failedUpdate = true
          location.reload()
        }
      },
      (error) => {
        this.waitingForAPI = false
        console.log(error)
      }
    )
  }

  close() {
    this.ngbModal.dismissAll()
  }
}

import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { HttpClient } from '@angular/common/http'
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

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
  userFirstName = ''

  constructor(
    private ngbModal: NgbModal,
    private httpClient: HttpClient,
    private configService: ConfigService,
    private userService: UserService
    // public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  btnClick(names) {
    this.waitingForAPI = true
    this.httpClient.post(`${this.configService.params.api.v1.path}/user/collect_user_names.php`, names).subscribe(
      (saved) => {
        if (saved) {
          this.userFirstName = names.firstName
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

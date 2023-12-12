import { Injectable } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { PubPowerUpComponent } from './pub-power-up.component'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class PubPowerUpService {

  public waitingForAPI = false
  public requestSuccess = false

  constructor(
    private httpClient: HttpClient,
    private ngbModal: NgbModal,
    private router: Router,
    private configService: ConfigService
  ) { }

  pubPowerUp() {
    this.interestExpressed()
    this.ngbModal.open(PubPowerUpComponent, {
      size: 'md', centered: true
    })
  }

  requestUpgradeBtn() {
    this.waitingForAPI = true
    this.httpClient.post(
      `${this.configService.params.api.route}/user/role`, {'role': 'request_access'}
      ).subscribe(
        () => {
          this.requestSuccess = true
          this.ngbModal.dismissAll()
          this.router.navigateByUrl("/webcourse/builder/sorry")
        },
        (err) => {},
        () => {
          this.waitingForAPI = false
        }
    )
  }

  interestExpressed() {
    this.httpClient.post(
      `${this.configService.params.api.route}/user/role`, {'role': 'interest_expressed'}
    ).subscribe( () => {} )
  }
}

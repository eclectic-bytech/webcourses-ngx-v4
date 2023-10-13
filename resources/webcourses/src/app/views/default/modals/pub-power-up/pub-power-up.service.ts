import { Injectable } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { PubPowerUpComponent } from './pub-power-up.component'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from 'src/app/core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class PubPowerUpService {

  public waitingForAPI = false
  public requestSuccess = false

  constructor(
    private httpClient: HttpClient,
    private ngbModal: NgbModal,
    private configService: ConfigService
  ) { }

  pubPowerUp() {
    this.ngbModal.open(PubPowerUpComponent, {
      size: 'md', centered: true
    })
  }

  requestUpgradeBtn() {
    this.waitingForAPI = true
    this.httpClient.post(
      `${this.configService.params.api.route}/publisher/request-access`, ''
    ).subscribe(
      () => { this.requestSuccess = true },
      (err) => { console.error(err) },
      () => { this.waitingForAPI = false}
    )
  }
}

import { Injectable } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ConfigService } from '../../services/config/config.service'
import { SessionExpiredComponent } from './session-expired.component'


@Injectable({
  providedIn: 'root'
})
export class SessionExpiredService {

  public percent: number = 100
  public errStatus: number

  constructor(
    public ngbModal: NgbModal,
    private configService: ConfigService
  ) { }

  sessionExpiredModal(errStatus?: number) {
    this.errStatus = errStatus
    this.ngbModal.open(SessionExpiredComponent, {
      size: 'md', centered: true, backdrop: 'static'
    })
    this.resetSessionCountDown(20)
  }

  resetSessionCountDown(msec: number) {
    let countDown = setInterval(() => {
      this.percent--
      if (this.percent === 0) {
        clearInterval(countDown)
        this.ngbModal.dismissAll()
        location.href = this.configService.params.domain + this.configService.params.logoutRedirectPath
      }
    }, msec)
  }
}

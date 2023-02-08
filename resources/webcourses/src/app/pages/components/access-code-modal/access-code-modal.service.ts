import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Md5 } from 'ts-md5/dist/md5'

// WNGX imports
import { AccessCodeModalComponent } from './access-code-modal.component'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { SessionExpiredService } from 'src/app/core/modals/session-expired/session-expired.service'

@Injectable({
  providedIn: 'root'
})

export class AccessCodeModalService {

  public submitButtonActive: boolean = true
  public formStatus: boolean | any = false
  public percent: number = 100

  public descText: string
  public defaultText = "Enter course access code"

  constructor(
    private httpClient: HttpClient,
    private ngbModal: NgbModal,
    private configService: ConfigService,
    private sessionExpiredService: SessionExpiredService
  ) { }

  accessCodeModal() {
    this.descText = this.defaultText

    this.ngbModal.open(AccessCodeModalComponent, {
      size: 'md', centered: true
    })
  }

  submitCode(accessCode:string) {

    this.submitButtonActive = false
    let hashedAccessCode = Md5.hashStr(accessCode)

    this.httpClient.get(
      `${this.configService.params.api.route}/webcourse/access-code/${hashedAccessCode}`
    ).subscribe(
      (reply) => {
        this.descText = `
          <div class="${reply['status']['cssClass']} font-weight-bold">
            ${reply['status']['message']}
          </div>
        `

        if (reply['status']['valid']) {
          this.validCode(reply['details']['cid'])
        } else {
          this.submitButtonActive = true
          setTimeout(() => {
            this.formStatus = false
            this.descText = this.defaultText
          }, 2300)
        }
      },
      (err) => {
        this.ngbModal.dismissAll()
        this.sessionExpiredService.sessionExpiredModal(err['status'])
      }
    )
  }

  validCode(cid: number) {
    setInterval( () => {
      this.percent--
      if (this.percent === 0) {
        location.href = `/webcourse/${cid}`
      }
    }, 21)
  }

}

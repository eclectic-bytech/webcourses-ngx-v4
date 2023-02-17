import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
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
  public percent: number
  public defaultCode: string // form input field name

  public defaultText: string = "Enter course access code"
  public descText: string = this.defaultText

  constructor(
    private httpClient: HttpClient,
    private ngbModal: NgbModal,
    private configService: ConfigService,
    private sessionExpiredService: SessionExpiredService,
    private router: Router
  ) { }

  accessCodeModal() {
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
        this.setResponseText(reply, false)

        if (reply['status']['valid']) {
          this.validCode(reply['first_aid'])
          this.setResponseText(reply, true)
        } else {
          this.submitButtonActive = true
          setTimeout(() => {
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

  validCode(first_aid: number) {
    let countDown = setInterval( () => {
      this.percent--
      if (this.percent === 0) {
        clearInterval(countDown)
        this.ngbModal.dismissAll()
        this.submitButtonActive = true
        this.router.navigateByUrl(`/webcourse/activities/${first_aid}`)
      }
    }, 21)
  }

  setResponseText(reply: Object, codeLabel: boolean) {
    this.descText = `
      <div class="${reply['status']['cssClass']} font-weight-bold">
        ${reply['status']['message']}
      </div>
    `
    if (codeLabel) {
      this.descText = this.descText + `
        <div class='font-weight-light text-secondary'>
          CODE: <span class='font-weight-bold'>${reply['label']}</span>
        </div>
        <div class='h6 text-secondary font-weight-light mt-1'>Redirecting...</div>
      `
    }
  }

}

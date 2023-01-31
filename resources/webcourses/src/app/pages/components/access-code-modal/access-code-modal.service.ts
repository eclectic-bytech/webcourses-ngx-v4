import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Course } from 'src/app/models/course.model'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { Md5 } from 'ts-md5/dist/md5'
import { AccessCodeModalComponent } from './access-code-modal.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Injectable({
  providedIn: 'root'
})

export class AccessCodeModalService {

  public submitButtonActive: boolean = true
  public formStatus: boolean | any = false

  public course: Course | null = null

  public descText: string
  public defaultText = "<span class='font-weight-normal'>a private webcourse that is<br>not listed in any catalogue</span>"

  constructor(
    private httpClient: HttpClient,
    private ngbModal: NgbModal,
    private configService: ConfigService
  ) { }

  accessCodeModal(course: Course | null) {
    if (course) {
      this.course = course
      this.descText = `<span class='font-weight-normal'>${course.title}</span>`
    } else {
      this.descText = this.defaultText
    }

    this.ngbModal.open(AccessCodeModalComponent, {
      size: 'md', centered: true
    })
  }

  submitCode(accessCode:string, cid: number) {

    this.submitButtonActive = false
    let hashedAccessCode = Md5.hashStr(accessCode)

    this.httpClient.get(
      `${this.configService.params.api.route}/coupon/course/${cid}/apply/${hashedAccessCode}`
    ).subscribe(
      (reply) => {
        this.descText = `<span class="${reply['status']['cssClass']} font-weight-bold"><br>${reply['status']['message']}</span>`
        this.submitButtonActive = true
        setTimeout(() => {
          this.formStatus = false
          this.descText = this.defaultText
        }, 2300);
      },
      (err) => {
        console.log(err)
        this.submitButtonActive = true
      }
    )
  }

}

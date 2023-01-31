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

  submitButtonActive = true
  public course: Course | null = null

  constructor(
    private httpClient: HttpClient,
    private ngbModal: NgbModal,
    private configService: ConfigService
  ) { }

  accessCodeModal(course: Course | null) {
    if (course) this.course = course

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
      (response) => {
        this.submitButtonActive = true
      },
      (err) => { this.submitButtonActive = true }
    )
  }
}

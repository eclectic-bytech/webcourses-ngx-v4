import { Component } from '@angular/core'
import { AccessCodeModalService } from './access-code-modal.service'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faFingerprint, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { trigger, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-access-code-modal',
  templateUrl: './access-code-modal.component.html',
  styleUrls: ['./access-code-modal.component.sass'],
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, CommonModule],
  animations: [
    trigger('valueAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ])
    ])
  ]
})

export class AccessCodeModalComponent {

  public accessCode: string

  public faFingerprint = faFingerprint
  public faSpinner = faSpinner

  constructor(
    public accessCodeModalService: AccessCodeModalService
  ) { }

  get course(){ return this.accessCodeModalService.course }
  get fromStatus(){ return this.accessCodeModalService.formStatus }

  submitCodeButton(accessCode: string) {
    let cid: number = this.course ? this.course.id : 0
    this.accessCodeModalService.submitCode(accessCode, cid)
  }

}

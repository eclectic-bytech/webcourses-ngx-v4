import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'
import { faFingerprint, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

// WNGX imports
import { AccessCodeModalService } from './access-code-modal.service'
import { FadeInOut2 } from 'src/app/core/animations/fade-in-out-2.animation'

@Component({
  selector: 'app-access-code-modal',
  templateUrl: './access-code-modal.component.html',
  styleUrls: ['./access-code-modal.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, CommonModule, NgbProgressbarModule],
  animations: [FadeInOut2]
})

export class AccessCodeModalComponent implements OnInit {

  public accessCode: string

  public faFingerprint = faFingerprint
  public faSpinner = faSpinner

  constructor(
    public accessCodeModalService: AccessCodeModalService
  ) { }

  ngOnInit(): void {
    // Resets defaults, needed if user enters a second access code in one session
    this.accessCodeModalService.descText = this.accessCodeModalService.defaultText
    this.accessCodeModalService.percent = 100
    this.accessCode = this.accessCodeModalService.defaultCode
  }

  submitCodeButton(accessCode: string) {
    this.accessCodeModalService.submitCode(accessCode)
  }

}

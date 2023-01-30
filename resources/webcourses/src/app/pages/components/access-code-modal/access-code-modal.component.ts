import { Component } from '@angular/core'
import { AccessCodeModalService } from './access-code-modal.service'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faFingerprint, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-access-code-modal',
  templateUrl: './access-code-modal.component.html',
  styleUrls: ['./access-code-modal.component.sass'],
  standalone: true,
  animations: [FadeInOut],
  imports: [FontAwesomeModule, FormsModule, CommonModule]
})

export class AccessCodeModalComponent {
  public accessCode: string
  public faFingerprint = faFingerprint
  public faSpinner = faSpinner

  constructor(
    public accessCodeModalService: AccessCodeModalService
  ) { }

  submitCodeButton(accessCode: string) {
    this.accessCodeModalService.submitCode(
      accessCode, this.accessCodeModalService.course.id
    )
  }

}

import { Component } from '@angular/core'
import { AccessCodeModalService } from './access-code-modal.service'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faFingerprint } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-access-code-modal',
  templateUrl: './access-code-modal.component.html',
  styleUrls: ['./access-code-modal.component.sass'],
  standalone: true,
  imports: [FontAwesomeModule]
})

export class AccessCodeModalComponent {

  public faFingerprint = faFingerprint

  constructor(
    public accessCodeModalService: AccessCodeModalService
  ) { }

}

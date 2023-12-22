import { Component, Input } from '@angular/core'
import { CompletionCertService } from './completion-cert.service'
import { faSpinner, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Activity } from 'src/app/webcourse/models/activity.model'

@Component({
  selector: 'app-completion-cert',
  templateUrl: './completion-cert.component.html',
  styleUrls: ['./completion-cert.component.scss']
})
export class CompletionCertComponent {

  @Input() activity: Activity

  faSpinner = faSpinner
  faFileArrowDown = faFileArrowDown

  constructor(
    public completionCertService: CompletionCertService
  ) { }

  downloadCertificateBtn(aid: number) {
    this.completionCertService.downloadCertificate(aid)
  }
}

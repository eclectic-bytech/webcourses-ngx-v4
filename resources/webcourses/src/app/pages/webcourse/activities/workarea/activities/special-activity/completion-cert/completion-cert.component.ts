import { Component, OnInit } from '@angular/core'
import { CompletionCertService } from './completion-cert.service'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-completion-cert',
  templateUrl: './completion-cert.component.html',
  styleUrls: ['./completion-cert.component.sass']
})
export class CompletionCertComponent implements OnInit {

  faSpinner = faSpinner

  constructor(
    public completionCertService: CompletionCertService
  ) { }

  ngOnInit(): void {
  }

}

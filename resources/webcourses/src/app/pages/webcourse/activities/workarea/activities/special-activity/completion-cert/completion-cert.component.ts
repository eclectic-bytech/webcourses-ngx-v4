import { Component } from '@angular/core'
import { CompletionCertService } from './completion-cert.service'
import { faSpinner, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

@Component({
  selector: 'app-completion-cert',
  templateUrl: './completion-cert.component.html',
  styleUrls: ['./completion-cert.component.scss']
})
export class CompletionCertComponent {

  faSpinner = faSpinner
  faFileArrowDown = faFileArrowDown

  constructor(
    public completionCertService: CompletionCertService,
    public selectedCourseService: SelectedCourseService
  ) { }

}

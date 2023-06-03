import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

// WNGX services
import { ThemeService } from '../../core/services/theme/theme.service'
import { WebcourseService } from './webcourse.service'

@Component({
  selector: 'app-webcourse',
  templateUrl: './webcourse.component.html',
  styleUrls: ['./webcourse.component.scss']
})
export class WebcourseComponent {

  constructor(
    public themeService: ThemeService,
    public sanitizer: DomSanitizer,
    public webcourseService: WebcourseService
  ) {}

}

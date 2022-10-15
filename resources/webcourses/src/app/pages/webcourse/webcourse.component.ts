import { Component, OnInit } from '@angular/core'
import { ThemeService } from '../../core/services/theme/theme.service'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-webcourse',
  templateUrl: './webcourse.component.html',
  styleUrls: ['./webcourse.component.scss']
})
export class WebcourseComponent implements OnInit {

  constructor(
    public themeService: ThemeService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
  }

}

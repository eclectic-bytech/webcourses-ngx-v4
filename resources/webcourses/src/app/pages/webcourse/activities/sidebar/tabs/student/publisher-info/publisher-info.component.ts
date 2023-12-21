import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Component } from '@angular/core'

import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { FadeInOut } from '../../../../../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-publisher-info',
  templateUrl: './publisher-info.component.html',
  styleUrls: ['./publisher-info.component.sass'],
  animations: [FadeInOut]
})
export class PublisherInfoComponent {

  faGlobe = faGlobe
  faEnvelope = faEnvelope

  constructor(
    public selectedCourseService: SelectedCourseService
  ) { }

}

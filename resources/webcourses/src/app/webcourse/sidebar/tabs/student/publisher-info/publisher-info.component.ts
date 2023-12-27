import { Component } from '@angular/core'

import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { Publisher } from 'src/app/models/publisher.model'

@Component({
  selector: 'app-publisher-info',
  templateUrl: './publisher-info.component.html',
  styleUrls: ['./publisher-info.component.sass'],
  animations: [FadeInOut]
})
export class PublisherInfoComponent {


  constructor(
    public selectedCourseService: SelectedCourseService
  ) { }

  firstLastName(publisher: Publisher) {
    return `${publisher.contact_fname} ${publisher.contact_lname}`
  }

}

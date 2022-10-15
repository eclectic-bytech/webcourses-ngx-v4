import { Component, OnInit } from '@angular/core'
import { PublisherService } from './../../../../catalogue/publisher/publisher.service'
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FadeInOut } from '../../../../../core/animations/fade-in-out.animation'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

@Component({
  selector: 'app-publisher-info',
  templateUrl: './publisher-info.component.html',
  styleUrls: ['./publisher-info.component.sass'],
  animations: [FadeInOut]
})
export class PublisherInfoComponent implements OnInit {

  faGlobe = faGlobe
  faEnvelope = faEnvelope

  constructor(
    public publisherService: PublisherService,
    public selectedCourseService: SelectedCourseService
  ) { }

  ngOnInit() {
  }

  get publisherInfo() {
    return this.selectedCourseService.selectedCourse.publisher
  }

}

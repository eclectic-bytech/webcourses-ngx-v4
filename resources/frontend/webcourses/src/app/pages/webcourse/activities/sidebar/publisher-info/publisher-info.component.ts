 import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PublisherService } from './../../../../catalogue/publisher/publisher.service'
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FadeInOut } from '../../../../../core/animations/fade-in-out.animation'
import { CourseService } from 'src/app/pages/catalogue/course/course.service'
import { Course } from 'src/app/models/course.model'

@Component({
  selector: 'app-publisher-info',
  templateUrl: './publisher-info.component.html',
  styleUrls: ['./publisher-info.component.sass'],
  animations: [FadeInOut]
})
export class PublisherInfoComponent implements OnInit {

  faGlobe = faGlobe
  faEnvelope = faEnvelope

  publisherInfo

  constructor(
    private route: ActivatedRoute,
    public courseService: CourseService,
    public publisherService: PublisherService
  ) { }

  ngOnInit() {
    this.courseService.courseInfo$.subscribe(
      (course: Course) => {
        this.publisherInfo = course.publisher
      }
    )
    this.publisherService.getPublisher(this.route.snapshot.params.aid, 'aid').subscribe(
      (publisherInfo) => {
        this.publisherInfo = publisherInfo
      }
    )
  }

}

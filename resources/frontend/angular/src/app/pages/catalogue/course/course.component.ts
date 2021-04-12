import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

import { CourseService } from './course.service'
import { PublisherService } from '../publisher/publisher.service'
import { PublisherModel } from '../../catalogue/models/publisher.model'
import { FadeInOut } from '../../../core/animations/fade-in-out.animation'


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [FadeInOut]
})
export class CourseComponent implements OnInit {

  public publisherInfo$: Observable<PublisherModel>
  public courseInfo$: Observable<any>

  constructor(
    private courseService: CourseService,
    private publisherService: PublisherService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.publisherInfo$ = this.publisherService.getPublisher(params.cid, 'cid').pipe(
          ( publisherInfo => publisherInfo)
        )
        this.courseInfo$ = this.courseService.getCourse(params.cid).pipe(
          ( course => course )
        )
      }
    )
  }

}

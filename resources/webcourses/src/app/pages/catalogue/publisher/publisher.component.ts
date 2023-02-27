import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Course } from './../../../models/course.model'
import { Publisher } from '../../../models/publisher.model'
import { AppService } from '../../../app.service'
import { TaxStatusService } from '../../../core/services/tax-status/tax-status.service'
import { FadeInOut } from '../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.sass'],
  animations: [FadeInOut]
})
export class PublisherComponent implements OnInit {

  public publisherCourses$: Observable<Course[]>
  public publisherInfo$: Observable<Publisher>

  constructor(
    private route: ActivatedRoute,
    private globalService: AppService,
    public taxService: TaxStatusService
  ) { }

  ngOnInit() {
    this.globalService.setTitle(this.route.snapshot.data.title)

    this.publisherCourses$ = this.route.data.pipe(map(data => data.publisherCourses))
    this.publisherInfo$ = this.route.data.pipe(map(data => data.publisherInfo))
  }

}

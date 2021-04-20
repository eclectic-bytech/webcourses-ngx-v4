import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { WebcoursesService } from './webcourses.service'
import { AppService } from './../../../app.service'
import { ActivatedRoute } from '@angular/router'
import { PublisherModel } from './../../catalogue/models/publisher.model'

import { faUsers, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { FadeInOut } from '../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-publisher-courses',
  templateUrl: './webcourses.component.html',
  styleUrls: ['./webcourses.component.sass'],
  animations: [FadeInOut]
})
export class WebcoursesComponent implements OnInit {

  faUsers = faUsers
  faThLarge = faThLarge

  publisherCourses$: Observable<any[]>
  public publisherInfo$: Observable<PublisherModel>

  constructor(
    private route: ActivatedRoute,
    public globalService: AppService,
    public pubCoursesService: WebcoursesService
  ) { }

  ngOnInit() {
    this.globalService.setTitle(this.route.snapshot.data.title)
    this.publisherCourses$ = this.route.data.pipe(map(data => data.webcourses))
    this.publisherInfo$ = this.route.data.pipe(map(data => data.publisherInfo))
  }

}

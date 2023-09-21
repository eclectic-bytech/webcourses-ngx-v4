import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject, Observable } from 'rxjs'

import { ConfigService } from 'src/app/core/services/config/config.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { Course } from 'src/app/models/course.model'
import { Publisher } from 'src/app/models/publisher.model'
import { PublisherService } from 'src/app/pages/catalogue/publisher/publisher.service'
import { UserService } from 'src/app/core/services/user/user.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass'],
  animations: [FadeInOut]
})
export class PublisherCoursesComponent implements OnInit {

  public publisher$ = new Observable<Publisher>
  public publisherCourses$ = new Subject<Course[]>

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private publisherService: PublisherService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getPublisherCourses()
    this.publisher$ = this.publisherService.getPublisher(this.userService.user.id)
  }

  getPublisherCourses() {
    this.httpClient.get<Course[]>(
      `${this.configService.params.api.route}/admin/publisher/courses`
    ).subscribe(
      (allCourses: Course[]) => {
        this.publisherCourses$.next(allCourses)
      }
    )
  }

}

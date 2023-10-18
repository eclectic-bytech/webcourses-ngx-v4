import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { Router } from '@angular/router'

import { ConfigService } from 'src/app/core/services/config/config.service'
import { DeleteCourseService } from '../../builder/components/delete-course/delete-course.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { Course } from 'src/app/models/course.model'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass'],
  animations: [FadeInOut]
})
export class PublisherCoursesComponent implements OnInit {

  public publisherCourses$ = new Subject<Course[]>

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private configService: ConfigService,
    private deleteCourseService: DeleteCourseService
  ) { }

  ngOnInit(): void {
    this.getPublisherCourses()
  }

  addCourseBtn() {
    this.router.navigate(['/admin', 'publisher', 'builder', 'course'])
  }

  deleteCourseBtn(course: Course) {
    this.deleteCourseService.deleteCourseModal(course)
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

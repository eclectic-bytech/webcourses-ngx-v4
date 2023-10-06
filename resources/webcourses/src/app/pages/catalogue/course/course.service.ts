import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { ConfigService } from '../../../core/services/config/config.service'
import { Course } from 'src/app/models/course.model'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courseInfo$: Observable<Course>

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getCourse(cid: any) {
    return this.http.get<Course>(`
      ${this.config.params.api.route}/catalogue/course/${cid}
    `).pipe(course => course)
  }

  getAdminCourse(cid: any) {
    return this.http.get<Course>(`
      ${this.config.params.api.route}/admin/course/${cid}
    `).pipe(course => course)
  }

}

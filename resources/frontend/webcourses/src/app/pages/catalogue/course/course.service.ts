import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../../../core/services/config/config.service'
import { Course } from 'src/app/models/course.model'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public showCouponInput: number

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getCourse(cid: any) {
    return this.http.get<Course>(`
      ${this.config.params.api.route}/catalogue/course/${cid}
    `).pipe(courses => courses)
  }

}

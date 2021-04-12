import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../../../core/services/config/config.service'

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
    return this.http.get<any>(`
      ${this.config.params.api.v1.path}/course/index.php?cid=${cid}
    `).pipe(courses => courses)
  }

}

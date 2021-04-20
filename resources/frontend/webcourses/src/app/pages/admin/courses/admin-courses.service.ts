import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class AdminCoursesService {

  public courses

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  getAllCourses() {
    return this.httpClient.get<any[]>(
      `${this.configService.params.api.v1.path}/admin/courses/`
    ).pipe( allCourses => allCourses )
  }
}

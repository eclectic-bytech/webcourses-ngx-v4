import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../../../../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class CourseAccessBlockService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  // copied from myCoursesCard. never used in v4, but might be a good example.
  getDestinationAid(pid: number, firstAid: boolean) {
    let first = (firstAid) ? '&first=true' : ''
    return this.httpClient
      .get<string>(`
        ${this.configService.params.api.route}/user/resume_course.php?pid=${pid}${first}
      `).pipe(aid => aid)
  }

}
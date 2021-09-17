import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../../../../../core/services/config/config.service'
import { UserAnswer } from 'src/app/pages/webcourse/activities/models/user.answer.model'

@Injectable({
  providedIn: 'root'
})
export class CourseAccessBlockService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  getDestinationAid(pid: number, firstAid: boolean) {
    let first = (firstAid) ? '&first=true' : ''
    return this.httpClient
      .get<UserAnswer>(`
        ${this.configService.params.api.route}/user/courses/resume/${pid}${first}
      `).pipe(aid => aid)
  }

}

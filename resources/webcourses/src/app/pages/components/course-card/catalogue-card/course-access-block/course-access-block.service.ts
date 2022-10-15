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

  getDestinationAid(pid: number) {
    // let first = (firstAid) ? '&first=true' : ''
    return this.httpClient
      .get<Number>(`
        ${this.configService.params.api.route}/user/courses/resume/${pid}
      `).pipe(aid => aid)
  }

}

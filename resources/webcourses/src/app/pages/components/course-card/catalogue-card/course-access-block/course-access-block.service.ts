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
      .get<{}>(`
        ${this.configService.params.api.route}/user/course/${pid}/resume/
      `).pipe(resume => resume)
  }

}

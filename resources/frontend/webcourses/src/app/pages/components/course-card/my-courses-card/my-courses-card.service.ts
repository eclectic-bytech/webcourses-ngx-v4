import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../../../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class MyCoursesCardService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  getDestinationAid(pid: number, firstAid: boolean) {
    let first = (firstAid) ? '&first=true' : ''
    return this.httpClient
      .get<string>(`
        ${this.configService.params.api.v1.path}/user/resume_course.php?pid=${pid}${first}
      `).pipe(aid => aid)
  }
}



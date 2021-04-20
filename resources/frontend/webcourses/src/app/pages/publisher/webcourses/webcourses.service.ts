import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class WebcoursesService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService

  ) { }

  getWebcourses(cid: string) {
    let i = (cid) ? `?cid=${cid}` : ''
    return this.httpClient.get<any[]>(
      `${this.configService.params.api.v1.path}/publisher/admin/courses/index.php${i}`
    ).pipe( publisherCourses => publisherCourses )
  }

}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../../../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  getCompletedActivities(cid, uid) {
    return this.httpClient.get<any[]>(
      `${this.configService.params.api.v1.path}/print/course.php?cid=${cid}&uid=${uid}`
    ).pipe( activities => activities )
  }

}

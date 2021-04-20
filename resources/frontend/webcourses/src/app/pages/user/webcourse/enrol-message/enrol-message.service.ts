import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../../../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class EnrolMessageService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getEnrolMessage(cid: number) {
    return this.http.get<any>(`
      ${this.config.params.api.v1.path}/courses/enrol_message.php?cid=${cid}
    `).pipe( message => message )
  }

}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../../../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  public courseProgress
  public selectedGroup = 0

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  getCourseProgress(cid) {
    return this.httpClient.get<any[]>(
      `${this.configService.params.api.route}/publisher/admin/course/students/index.php?cid=` + cid
    ).pipe( activities => activities )
  }

  getCourseStudentsGroups(cid) {
    return this.httpClient.get<any[]>(
      `${this.configService.params.api.route}/publisher/admin/course/students/groups/index.php?cid=` + cid
    ).pipe( courseStudentGroups => courseStudentGroups )
  }

}

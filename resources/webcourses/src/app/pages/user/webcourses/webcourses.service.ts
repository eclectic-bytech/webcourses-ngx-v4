import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

import { ConfigService } from 'src/app/core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})

export class WebcoursesService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private configService: ConfigService
  ) {
  }

  goToActivity(pid: number) {
    // When course is completed, first aid in course is fetched. Otherwise, last completed.
    this.httpClient.get<{}>(`${this.configService.params.api.route}/user/course/${pid}/resume/`).subscribe(
      (resume: any) => {
        this.router.navigateByUrl(`/webcourse/activities/${resume.aid}`)
      }
    )
  }

}

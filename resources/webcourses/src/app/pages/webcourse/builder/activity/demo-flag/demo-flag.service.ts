import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

// WNGX services
import { ConfigService } from 'src/app/core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class DemoFlagService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  saveActivityDemoStatus() {
    console.log('Yo.')
    // this.httpClient.put<number>(
    //   `${this.configService.params.api.route}/admin/publisher/course-editor/syllabus/${aid}/demo`, aid
    // ).subscribe(
    //   (response) => { console.log(response) },
    //   (err) => { console.log(err) }
    // )
  }

}

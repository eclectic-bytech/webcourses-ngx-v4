import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Course } from 'src/app/models/course.model'
import { ConfigService } from 'src/app/core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})

export class AccessCodeModalService {

  public course: Course

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  submitCode(code:string) {
    this.httpClient.post(`${this.configService.params.api.route}/k`, code).subscribe(
      (data) => {
        console.log("It's alive!")
        console.log(data)
      }
    )
  }

}

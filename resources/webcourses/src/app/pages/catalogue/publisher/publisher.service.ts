import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from './../../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getPublisher(uid: any) {
    return this.http.get<any>(`
      ${this.config.params.api.route}/publisher/profile/${uid}
    `).pipe(publisher => publisher)

    // We used to fetch publisher's details based on PID, AID and PUB
    // via URL's ?type=... see code below, which was the original line 17 above.

    // ${this.config.params.api.route}/publisher/profile/index.php?id=${id}&type=${type}

    // This might come in handy later, but for now is not needed.
  }

}

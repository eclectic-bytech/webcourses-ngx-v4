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

  getPublisher(id: any, type: string) {
    return this.http.get<any>(`
      ${this.config.params.api.v1.path}/publisher/profile/index.php?id=${id}&type=${type}
    `).pipe(publisher => publisher)
  }

}

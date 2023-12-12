import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Course } from './../../models/course.model'
import { ConfigService } from '../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getWebcourseCatalogue(pub_id: any) {
    const path = pub_id ?
      `${this.config.params.api.route}/catalogue?publisher=${pub_id}` :
      `${this.config.params.api.route}/catalogue`
    return this.http.get<Course>(path).pipe(courses => courses)
  }

}

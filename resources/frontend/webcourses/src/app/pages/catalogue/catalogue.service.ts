import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CatalogueModel } from './models/catalogue.model'
import { ConfigService } from '../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public showCouponInput: number

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getWebcourseCatalogue(pub_id: any) {
    return this.http.get<CatalogueModel>(`
      ${this.config.params.api.route}/courses/index.php?pub_id=${pub_id}
    `).pipe(courses => courses)
  }

}

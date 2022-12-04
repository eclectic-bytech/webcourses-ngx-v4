import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { Coupon } from 'src/app/models/coupon.model'

@Injectable({
  providedIn: 'root'
})
export class DiscountCodesService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  getDiscountCodes$() {
    return this.httpClient.get<Coupon>(`
      ${this.configService.params.api.route}/publisher/codes}
    `).pipe(codes => codes)
  }
}

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
    private configService: ConfigService,
  ) { }

  getDiscountCodes(cid?: string) {
    let path = `${this.configService.params.api.route}/admin/publisher/coupons`
    path = (cid) ? `${path}/${cid}` : path
    return this.httpClient.get<Coupon[]>(path).pipe(codes => codes)
  }
}

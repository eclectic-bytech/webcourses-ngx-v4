import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// WNGX imports
import { ConfigService } from 'src/app/core/services/config/config.service'
import { Coupon } from 'src/app/models/coupon.model'
import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  recentCodeUses() {
    return this.httpClient
      .get<Coupon[]>(`${this.configService.params.api.route}/admin/system/recent-code-uses`)
      .pipe(codeUses => codeUses)
  }

  recentLogins() {
    return this.httpClient
      .get<JetstreamUser[]>(`${this.configService.params.api.route}/admin/system/recent-logins`)
      .pipe(users => users)
  }

  publisherInterest() {
    return this.httpClient
      .get(`${this.configService.params.api.route}/admin/system/publisher-interest`)
      .pipe(users => users)
  }
}

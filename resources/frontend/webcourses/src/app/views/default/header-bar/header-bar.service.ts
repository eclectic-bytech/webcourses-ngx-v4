import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from './../../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class HeaderBarService {

  constructor(
    private httpClient: HttpClient,
    @Inject(DOCUMENT) private document: Document,
    private configService: ConfigService
  ) { }

  signOut() {
    // Laravel's /user/logout requires a POST request - standard links use GET
    // We could embed a form instead this method, but then we'd have to render
    // config path parameters in template, or create a method anyway.
    this.httpClient.post('/user/logout', '').subscribe(
      () => {
        const logoutRedirectPath: string = `https://${this.configService.params.cookies.domain}${this.configService.params.logoutRedirectPath}`
        this.document.location.href = logoutRedirectPath
      },
      (err) => { console.log('err') }
    )
  }
}

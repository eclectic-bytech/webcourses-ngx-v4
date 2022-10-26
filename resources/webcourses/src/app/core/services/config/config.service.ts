import { Injectable } from '@angular/core'
import { HttpClient, HttpBackend } from '@angular/common/http'
import { Config } from './../../models/config.model'
import { Theme } from '../../../models/theme.model'

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  private appConfig: Config

  // Using handler: HttpBackend in constructor, this way synced config init can use httpClient
  private httpBackEnd: HttpClient

  constructor(
    public handler: HttpBackend
  ) {
    this.httpBackEnd = new HttpClient(handler)
  }


  loadConfig() {
    return this.httpBackEnd.get<Config>('config.json')
      .toPromise()
      .then(
        (config: Config) => { this.appConfig = config },
        (err) => { console.log('Failed to load config.json. ' + err) }
      )
  }

  get params() {
    if (!this.appConfig) { throw Error('Trying to use config, but it was not yet loaded!') }
    return this.appConfig
  }

  brandLogo(theme: Theme) {
    return 'publisher-files/1/theme/logo.png'
    // return this.appConfig.publicDirectory + theme.logo
  }

  assetsImage(file: string) {
    return this.appConfig.assetsPath + file
  }

  apiEndPoint(endPoint: string) {
    return this.appConfig.api.domain + this.appConfig.api.route + endPoint
  }

}

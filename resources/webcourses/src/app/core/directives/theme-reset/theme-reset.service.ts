import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Publisher } from 'src/app/models/publisher.model'
import { ConfigService } from '../../services/config/config.service'

@Injectable({
  providedIn: 'root'
})

export class ThemeResetService {
  public defaultPublisher: Publisher
  public activePublisher$ = new BehaviorSubject<Publisher | null>(null)
  public activePublisher: Publisher // used in getters

  constructor(
    configService: ConfigService
  ) {
    this.defaultPublisher = new Publisher()
    this.defaultPublisher.id = 1
    this.defaultPublisher.id_alias = 'default'
    this.defaultPublisher.website = configService.params.domain
  }

  enableDynamicThemes() {
    this.activePublisher$.next(this.defaultPublisher)

    this.activePublisher$.subscribe(
      (publisher: Publisher) => {
        this.activePublisher = publisher
      }
    )
  }

  get path() {
    return `publisher-files/${this.activePublisher.id}/theme`
  }

  get logo() {
    return `${this.path}/logo.png`
  }

  get css() {
    return `${this.path}/styles.css`
  }

}

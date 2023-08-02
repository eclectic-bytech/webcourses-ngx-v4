import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Publisher } from 'src/app/models/publisher.model'

@Injectable({
  providedIn: 'root'
})

export class ThemeResetService {
  public activeTheme$ = new BehaviorSubject<Publisher | null>(null)
  public defaultPublisher: Publisher

  constructor() {
    this.defaultPublisher = new Publisher()
    this.defaultPublisher.id = 1
    this.defaultPublisher.id_alias = 'default'
    this.activeTheme$.next(this.defaultPublisher)
  }

  changeTheme(publisher: Publisher | null) {
    // setTimeout fixes 'values changed after evaluation' error
    // solution from https://blog.angular-university.io/angular-debugging/
    setTimeout(() => {
      this.activeTheme$.next(publisher)
    })
  }
}

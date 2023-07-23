import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Publisher } from 'src/app/models/publisher.model'

@Injectable({
  providedIn: 'root'
})
export class ThemeResetService {
  public activeTheme$: BehaviorSubject<Publisher | null>
  constructor() { }

  changeTheme(publisher: Publisher) {
    // setTimeout fixes 'values changed after evaluation' error
    // solution from https://blog.angular-university.io/angular-debugging/
    setTimeout(() => {
      this.activeTheme$.next(publisher)
    })
  }
}

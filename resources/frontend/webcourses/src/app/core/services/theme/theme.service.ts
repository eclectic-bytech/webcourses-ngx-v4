import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Theme } from './../../models/theme.model'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  defaultTheme: Theme = {
    bootstrap_nav: 'navbar-dark',
    label: 'CultivateLearning',
    path: 'default',
    sideBar: false,
    headerBar: false,
    mainArea: false,
    logo: '/publisher-files/default/theme/logo.png'
  }

  public activeTheme$ = new BehaviorSubject<Theme>(
    this.defaultTheme
  )

  changeTheme(theme: Theme) {
    // setTimeout fixes 'values changed after evaluation' error
    // solution from https://blog.angular-university.io/angular-debugging/
    setTimeout(() => {
      this.activeTheme$.next(theme)
    })
  }

}

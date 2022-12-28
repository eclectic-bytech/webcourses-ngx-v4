import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Theme } from './../../../models/theme.model'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  defaultTheme: Theme = {
    id: 1,
    id_alias: 'default',
    publisher_id: 1,
    label: 'Open',
    path: '0',
    logo: 'publisher-files/1/theme/logo.svg',
    css: 'publisher-files/1/theme/styles.css',
    bootstrap_nav: 'navbar-light',
    created_at: '',
    updated_at: '',
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

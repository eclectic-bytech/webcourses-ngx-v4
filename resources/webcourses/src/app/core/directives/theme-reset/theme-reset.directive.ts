import { Directive, OnInit, Input } from '@angular/core'

// WNGX imports
import { ThemeResetService } from './theme-reset.service'
import { Publisher } from 'src/app/models/publisher.model'

@Directive({
  selector: '[appThemeSetNew]'
})
export class ThemeResetDirective implements OnInit {

  @Input('appThemeSetNew') publisher: Publisher

  constructor(
    private themeResetService: ThemeResetService
  ) { }

  ngOnInit() {
    this.themeResetService.activeTheme$.next(this.publisher)
  }

}

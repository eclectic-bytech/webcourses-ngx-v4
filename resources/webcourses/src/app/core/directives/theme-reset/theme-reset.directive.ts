import { Directive, OnInit, Input } from '@angular/core'
import { ThemeService } from '../../services/theme/theme.service'
import { Theme } from '../../models/theme.model'

@Directive({
  selector: '[appThemeSet]'
})
export class ThemeResetDirective implements OnInit {

  @Input('appThemeSet') theme: Theme

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    this.themeService.changeTheme(this.theme)
  }

}

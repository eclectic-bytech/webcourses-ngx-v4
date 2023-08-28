import { Directive, OnInit, Input } from '@angular/core'

// WNGX imports
import { ThemeService } from './theme.service'
import { Publisher } from 'src/app/models/publisher.model'

@Directive({
  selector: '[appThemeSetNew]'
})
export class ThemeDirective implements OnInit {

  @Input('appThemeSetNew') publisher: Publisher

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.themeService.activePublisher$.next(this.publisher)
  }

}

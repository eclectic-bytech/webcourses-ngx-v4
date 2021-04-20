import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AuthService2 } from './../../core/services/auth/auth2.service'
import { ThemeService } from './../../core/services/theme/theme.service'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.sass']
})
export class HelpComponent {

  constructor(
    public auth2: AuthService2,
    public activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
  ) {
    this.activatedRoute.data.subscribe(
      (data) => {
        if (data.publisherInfo) {
          this.themeService.changeTheme(data.publisherInfo.theme)
        }
      }
    )
  }

}

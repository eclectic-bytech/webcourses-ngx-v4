import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UserService } from './../../core/services/user/user.service'
import { ThemeService } from './../../core/services/theme/theme.service'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.sass']
})
export class HelpComponent {

  constructor(
    public userService: UserService,
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

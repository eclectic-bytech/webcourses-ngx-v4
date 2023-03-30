import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ConfigService } from 'src/app/core/services/config/config.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { ThemeService } from 'src/app/core/services/theme/theme.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  animations: [FadeInOut]
})
export class HelpComponent {

  constructor(
    public activatedRoute: ActivatedRoute,
    public configService: ConfigService,
    public userService: UserService,
    public themeService: ThemeService,
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

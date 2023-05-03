import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ConfigService } from 'src/app/core/services/config/config.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { ThemeService } from 'src/app/core/services/theme/theme.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  animations: [FadeInOut]
})
export class HelpComponent {
  htmlContent: string

  constructor(
    public activatedRoute: ActivatedRoute,
    public configService: ConfigService,
    public userService: UserService,
    public themeService: ThemeService,
    private http: HttpClient,
  ) {
    this.activatedRoute.data.subscribe(
      (data) => {
        if (data.publisherInfo) {
          this.themeService.changeTheme(data.publisherInfo.theme)
        }
      }
    )
  }

  ngOnInit() {
    this.http.get('/webcourses/publisher-files/default/html/help.html', { responseType: 'text' }).subscribe(data => {
      this.htmlContent = data
    })
  }
}

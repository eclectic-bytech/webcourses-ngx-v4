import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'

import { ConfigService } from 'src/app/core/services/config/config.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { ThemeResetService } from 'src/app/core/directives/theme-reset/theme-reset.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { Publisher } from 'src/app/models/publisher.model'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  animations: [FadeInOut]
})
export class HelpComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
    public userService: UserService,
    public themeResetService: ThemeResetService,
    private configService: ConfigService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['pub_id']) {
      this.httpClient.get<any>(
        `${this.configService.params.api.route}/publisher/profile/${this.activatedRoute.snapshot.params['pub_id']}`
      ).subscribe( (publisher: Publisher) => {
        this.themeResetService.activePublisher$.next(publisher)
      })
    }
  }

}

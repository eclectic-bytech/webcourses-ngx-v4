import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'

// WNGX services and models
import { UserService } from './core/services/user/user.service'
import { ConfigService } from './core/services/config/config.service'
import { JetstreamUser } from './core/models/jetstream-user.model'
import { TaxStatusService } from './core/services/tax-status/tax-status.service'
import { ThemeService } from './views/theme/theme.service'

@Injectable({
  providedIn: 'root'
})

export class AppService {

  public taxStatus = true

  constructor(
    private configService: ConfigService,
    private titleService: Title,
    private userService: UserService,
    private themeService: ThemeService,
    private taxService: TaxStatusService
  ) {}

  init() {
    this.themeService.enableDynamicThemes()
    // Local proxy has a user object, making it impossible to do an anon session
    // The if-check allows us to run getUser via admin menu bar and its "Simulate Login"
    if (!this.configService.params.devMode) {
      this.getUser()
    }
  }

  public getUser() {
    this.userService.getUser().subscribe(
      (user: JetstreamUser) => {
        // Call will return empty response if user is not logged in.
        // We check for that before overwriting anon user.
        if (user) this.userService.user = user
        this.taxService.taxesApply(user)
      },
      (err) => { console.log(err) }
    )
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle)
  }

}

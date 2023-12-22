import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'

// WNGX services and models
import { UserService } from 'src/app/core/services/user/user.service'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'
import { ThemeService } from 'src/app/views/theme/theme.service'

@Injectable({
  providedIn: 'root'
})

export class AppService {

  public taxStatus = true

  constructor(
    private configService: ConfigService,
    private titleService: Title,
    private userService: UserService,
    private themeService: ThemeService
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
      },
      (err) => { console.log(err) }
    )
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle)
  }

}

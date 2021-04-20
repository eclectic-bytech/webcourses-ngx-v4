import { Component, OnInit, Input } from '@angular/core'
import { UserService } from './../../../core/services/user/user.service'
import { AuthService2 } from '../../../core/services/auth/auth2.service'
import { User } from '../../../core/models/user.model'
import { GravatarMd5Service } from '../../../core/services/gravatar-md5/gravatar-md5.service'
import { ThemeService } from '../../../core/services/theme/theme.service'
import { DomSanitizer } from '@angular/platform-browser'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { Theme } from '../../../core/models/theme.model'

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  @Input() theme: Theme
  faWrench = faWrench
  faGem = faGem
  faGraduationCap = faGraduationCap

  public user: User
  public menuCollapsed = true
  public menuCollapsed2 = true

  constructor(
    public sanit: DomSanitizer,
    public userService: UserService,
    public auth2: AuthService2,
    public gravatarMd5: GravatarMd5Service,
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    this.userService.user$.subscribe(
      (user: User) => { this.user = user },
      (err) => { console.log(err) }
    )
  }

  collapseMenus() {
    this.menuCollapsed = this.menuCollapsed2 = true
  }

}

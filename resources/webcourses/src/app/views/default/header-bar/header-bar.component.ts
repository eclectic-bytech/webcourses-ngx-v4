import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from './../../../core/services/user/user.service'
import { HeaderBarService } from './header-bar.service'
// import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'
import { GravatarMd5Service } from '../../../core/services/gravatar-md5/gravatar-md5.service'
import { ThemeService } from '../../../core/services/theme/theme.service'
import { DomSanitizer } from '@angular/platform-browser'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Theme } from '../../../models/theme.model'

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
  faSignOutAlt = faSignOutAlt

  public menuCollapsed = true
  public menuCollapsed2 = true

  constructor(
    private router: Router,
    public sanit: DomSanitizer,
    public userService: UserService,
    public headerbarService: HeaderBarService,
    public gravatarMd5: GravatarMd5Service,
    public themeService: ThemeService
  ) { }

  ngOnInit() {}

  collapseMenus() {
    this.menuCollapsed = this.menuCollapsed2 = true
  }

  logoLink(theme: Theme) {
    this.router.navigateByUrl('/')
    // if (theme.path == "default") {
    //   // CL logo linked to home page
    //   this.router.navigateByUrl('/')
    // } else {
    //   if (theme.publisherHome) {
    //     // Publisher's logo linked to their website
    //     window.open(theme.publisherHome, "_blank")
    //   } else {
    //     // Publisher's logo linked to their course catalogue (website url not provided)
    //     this.router.navigateByUrl(`/catalogue/publisher/${theme.path}`)
    //   }
    // }
  }

}

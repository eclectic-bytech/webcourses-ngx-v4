import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from './../../../core/services/user/user.service'
import { HeaderBarService } from './header-bar.service'
import { GravatarMd5Service } from '../../../core/services/gravatar-md5/gravatar-md5.service'
import { DomSanitizer } from '@angular/platform-browser'
import { ThemeService } from 'src/app/views/theme/theme.service'
import { Publisher } from 'src/app/models/publisher.model'
import { FadeInOut2 } from 'src/app/core/animations/fade-in-out-2.animation'

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  animations: [FadeInOut2],
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {

  @Input() publisher: Publisher

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


  collapseMenus() {
    this.menuCollapsed = this.menuCollapsed2 = true
  }

  logoLink(publisher: Publisher) {
    if (publisher.id == 1) {
      // CL logo linked to home page
      this.router.navigateByUrl('/')
    } else {
      if (publisher.website) {
        // Publisher's logo linked to their website
        window.open(publisher.website, "_blank")
      } else {
        // Publisher's logo linked to their course catalogue (website url not provided)
        this.router.navigateByUrl(`/catalogue/publisher/${publisher.id_alias}`)
      }
    }
  }

}

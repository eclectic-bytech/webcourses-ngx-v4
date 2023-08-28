import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from './../../../core/services/user/user.service'
import { HeaderBarService } from './header-bar.service'
import { GravatarMd5Service } from '../../../core/services/gravatar-md5/gravatar-md5.service'
import { DomSanitizer } from '@angular/platform-browser'
import { faWrench, faGem, faGraduationCap, faSignOutAlt, faPenNib, faBarcode, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { ThemeResetService } from 'src/app/views/theme-reset/theme-reset.service'
import { Publisher } from 'src/app/models/publisher.model'
import { FadeInOut2 } from 'src/app/core/animations/fade-in-out-2.animation'

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  animations: [FadeInOut2],
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  @Input() publisher: Publisher

  faWrench = faWrench
  faGem = faGem
  faGraduationCap = faGraduationCap
  faSignOutAlt = faSignOutAlt
  faPenNib = faPenNib
  faBarcode = faBarcode
  faScrewdriverWrench = faScrewdriverWrench

  public menuCollapsed = true
  public menuCollapsed2 = true

  constructor(
    private router: Router,
    public sanit: DomSanitizer,
    public userService: UserService,
    public headerbarService: HeaderBarService,
    public gravatarMd5: GravatarMd5Service,
    public themeResetService: ThemeResetService
  ) { }

  ngOnInit() {}

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

import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'

// WNGX imports
import { DashboardService } from './dashboard.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { GravatarMd5Service } from 'src/app/core/services/gravatar-md5/gravatar-md5.service'

import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'
import { Coupon } from 'src/app/models/coupon.model'

import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  animations: [FadeInOut]
})

export class DashboardComponent {

  public faRepeat = faRepeat

  public recentCodeUses$: Observable<Coupon[]> = this.dashboardService.recentCodeUses()
  public recentLogins$: Observable<JetstreamUser[]> = this.dashboardService.recentLogins()
  public publisherInterest$: Observable<any> = this.dashboardService.publisherInterest()

  public lastRefresh = new Date()
  public lastLatestLoginsRefresh = new Date()

  constructor(
    public dashboardService: DashboardService,
    public userService: UserService,
    public gravatarMd5Service: GravatarMd5Service
  ) { }

  refresh() {
    this.recentCodeUses$ = this.dashboardService.recentCodeUses()
    this.lastRefresh = new Date()
  }

  refreshLatestLogins() {
    this.recentLogins$ = this.dashboardService.recentLogins()
    this.lastLatestLoginsRefresh = new Date()
  }
}

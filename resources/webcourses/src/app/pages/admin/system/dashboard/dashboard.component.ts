import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'
import { Coupon } from 'src/app/models/coupon.model'
import { DashboardService } from './dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  animations: [FadeInOut]
})

export class DashboardComponent {

  public recentCodeUses$: Observable<Coupon[]> = this.dashboardService.recentCodeUses()
  public recentLogins$: Observable<JetstreamUser[]> = this.dashboardService.recentLogins()

  constructor(
    private dashboardService: DashboardService
  ) { }

}

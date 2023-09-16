import { Component } from '@angular/core'
import { Observable } from 'rxjs'

import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { PublisherService } from 'src/app/pages/catalogue/publisher/publisher.service'
import { Publisher } from 'src/app/models/publisher.model'
import { UserService } from 'src/app/core/services/user/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [FadeInOut]
})

export class DashboardComponent {

  public publisherInfo$: Observable<Publisher>

  constructor(
    public publisherService: PublisherService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.publisherInfo$ = this.publisherService.getPublisher(this.userService.user.id);
  }

}

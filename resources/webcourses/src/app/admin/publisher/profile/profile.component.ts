import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { PublisherService } from 'src/app/catalogue/directories/publisher/publisher.service'
import { Publisher } from 'src/app/models/publisher.model'
import { UserService } from 'src/app/core/services/user/user.service'

@Component({
  selector: 'app-publisher-profile-admin',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  animations: [FadeInOut]
})
export class PublisherProfileComponent implements OnInit {

  public publisherInfo$: Observable<Publisher>

  constructor(
    public publisherService: PublisherService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.publisherInfo$ = this.publisherService.getPublisher(this.userService.user.id);
  }

}

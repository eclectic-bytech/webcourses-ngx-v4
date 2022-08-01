import { Component, OnInit } from '@angular/core'

import { PublisherService } from 'src/app/pages/catalogue/publisher/publisher.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { PublisherModel } from 'src/app/pages/catalogue/models/publisher.model'

@Component({
  selector: 'app-publisher-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  animations: [FadeInOut]
})
export class PublisherAdminDashboardComponent implements OnInit {

  public publisherInfo: PublisherModel

  constructor(
    public publisherService: PublisherService
  ) { }

  ngOnInit(): void {

    this.publisherService.getPublisher(1, 'cid').subscribe(
      (publisher: PublisherModel) => {
        this.publisherInfo = publisher
      }
    )
  }
}


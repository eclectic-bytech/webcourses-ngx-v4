import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { PublisherService } from 'src/app/pages/catalogue/publisher/publisher.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { Publisher } from './../../../../models/publisher.model'

@Component({
  selector: 'app-publisher-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  animations: [FadeInOut]
})
export class PublisherAdminDashboardComponent implements OnInit {

  public publisherInfo$: Observable<Publisher>

  constructor(
    public publisherService: PublisherService
  ) { }

  ngOnInit(): void {
    console.log('Kay')
    this.publisherInfo$ = this.publisherService.getPublisher(1, 'Kay');
  }

}


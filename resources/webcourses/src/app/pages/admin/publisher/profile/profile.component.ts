import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { PublisherService } from 'src/app/pages/catalogue/publisher/publisher.service'
import { Publisher } from './../../../../models/publisher.model'

@Component({
  selector: 'app-publisher-profile-admin',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  animations: [FadeInOut]
})
export class PublisherProfileComponent implements OnInit {

  public publisherInfo$: Observable<Publisher>
  constructor(
    public publisherService: PublisherService
  ) { }

  ngOnInit(): void {
    this.publisherInfo$ = this.publisherService.getPublisher(1, 'Kay');
  }

}

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PublisherService } from './../../../../catalogue/publisher/publisher.service'
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FadeInOut } from '../../../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-publisher-info',
  templateUrl: './publisher-info.component.html',
  styleUrls: ['./publisher-info.component.sass'],
  animations: [FadeInOut]
})
export class PublisherInfoComponent implements OnInit {

  faGlobe = faGlobe
  faEnvelope = faEnvelope

  publisherInfo

  constructor(
    private route: ActivatedRoute,
    public publisherService: PublisherService
  ) { }

  ngOnInit() {
    this.publisherService.getPublisher(this.route.snapshot.params.aid, 'aid').subscribe(
      (publisherInfo) => {
        this.publisherInfo = publisherInfo
      }
    )
  }

}

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AppService } from '../../../../app.service'
import { FadeInOut } from '../../../../core/animations/fade-in-out.animation'
import { PublisherService } from '../../../catalogue/publisher/publisher.service'
import { ThemeService } from 'src/app/views/theme/theme.service'

@Component({
  selector: 'app-enrol-message',
  templateUrl: './enrol-message.component.html',
  styleUrls: ['./enrol-message.component.sass'],
  animations: [FadeInOut]
})
export class EnrolMessageComponent implements OnInit {

  public cid: number
  public enrolMessage$: Observable<any>

  constructor(
    private route: ActivatedRoute,
    private globalWebCourseService: AppService,
    private publisherService: PublisherService,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.enrolMessage$ = this.route.data.pipe(map(data => data.enrolMessage))
    this.globalWebCourseService.setTitle(this.route.snapshot.data.title)
    this.publisherService.getPublisher(this.route.snapshot.params.cid, 'cid').subscribe(
      (publisherInfo) => {
        this.themeService.activePublisher$.next(publisherInfo)
      }
    )
  }

}

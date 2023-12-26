import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import { Subscription } from 'rxjs'

// WNGX services and components
import { CollectUserNamesComponent } from 'src/app/webcourse/workarea/student/components/collect-user-names/collect-user-names.component'
import { PublisherService } from 'src/app/catalogue/directories/publisher/publisher.service'
import { WebcourseService } from 'src/app/webcourse/webcourse.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { Activity } from 'src/app/webcourse/models/activity.model'

@Component({
  selector: 'wngx-webcourse',
  templateUrl: './webcourse.component.html',
  styleUrls: ['./webcourse.component.scss']
})
export class WebcourseComponent implements OnInit, OnDestroy {

  private modalOptions: NgbModalOptions
  private sub: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngbModal: NgbModal,
    private webcourseService: WebcourseService,
    private userService: UserService,
    public publisherService: PublisherService
  ) {
    this.modalOptions = {
      backdrop: 'static',
      centered: true,
      keyboard: false
    }
  }

  ngOnInit() {
    if (!this.userService.user.first_name) {
      const comp = this.ngbModal.open(CollectUserNamesComponent, this.modalOptions)
      comp.componentInstance.user = this.userService.user
    }

    this.webcourseService.getActivities(this.activatedRoute.snapshot.paramMap.get('aid'))
      .subscribe(
        (activitySet: Activity[]) => {
          this.webcourseService.bootstrapCourse(activitySet)
        }
      )

    this.sub = this.activatedRoute.params.subscribe(
      data => {
        this.webcourseService.loadActivities(data.aid)
      }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}

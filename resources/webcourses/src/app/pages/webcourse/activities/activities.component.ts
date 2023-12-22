import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import { Subscription } from 'rxjs'

// WNGX services and components
import { CollectUserNamesComponent } from 'src/app/pages/webcourse/activities/workarea/student/components/collect-user-names/collect-user-names.component'
import { PublisherService } from 'src/app/pages/catalogue/publisher/publisher.service'
import { ActivitiesService } from 'src/app/pages/webcourse/activities/activities.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { Activity } from 'src/app/pages/webcourse/activities/models/activity.model'

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit, OnDestroy {

  private modalOptions: NgbModalOptions
  private sub: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngbModal: NgbModal,
    private activitiesService: ActivitiesService,
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

    this.activitiesService.getActivities(this.activatedRoute.snapshot.paramMap.get('aid'))
      .subscribe(
        (activitySet: Activity[]) => {
          this.activitiesService.bootstrapCourse(activitySet)
        }
      )

    this.sub = this.activatedRoute.params.subscribe(
      data => {
        this.activitiesService.loadActivities(data.aid)
      }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}

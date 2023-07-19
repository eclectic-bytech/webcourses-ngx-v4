import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import { Subscription } from 'rxjs'

import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

// WNGX services and components
import { CollectUserNamesComponent } from './components/collect-user-names/collect-user-names.component'
import { PublisherService } from './../../catalogue/publisher/publisher.service'
import { ActivitiesService } from './activities.service'
import { UserService } from '../../../core/services/user/user.service'
import { Activity } from './workarea/models/activity.model'

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit, OnDestroy {

  private modalOptions: NgbModalOptions
  private sub: Subscription

  faUserGraduate = faUserGraduate
  faList = faList
  faLeaf = faLeaf
  faInfoCircle = faInfoCircle
  faQuestionCircle = faQuestionCircle
  faChevronUp = faChevronUp
  faChevronDown = faChevronDown

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngbModal: NgbModal,
    public activitiesService: ActivitiesService,
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

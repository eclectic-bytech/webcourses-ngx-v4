import { Component, OnInit, OnDestroy } from '@angular/core'
import { PublisherService } from './../../catalogue/publisher/publisher.service'
import { Subscription } from 'rxjs'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'

import { CollectUserNamesComponent } from './components/collect-user-names/collect-user-names.component'
import { ActivitiesService } from './activities.service'
import { UserService } from '../../../core/services/user/user.service'
import { User } from '../../../core/models/user.model'
import { ChapterIndexService } from './sidebar/chapter-index/chapter-index.service'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit, OnDestroy {

  private sub: Subscription
  private modalOptions: NgbModalOptions

  faUserGraduate = faUserGraduate
  faList = faList
  faLeaf = faLeaf
  faInfoCircle = faInfoCircle
  faQuestionCircle = faQuestionCircle
  faChevronUp = faChevronUp
  faChevronDown = faChevronDown

  constructor(
    private ngbModal: NgbModal,
    public activitiesService: ActivitiesService,
    private userService: UserService,
    private chapterIndexService: ChapterIndexService,
    public publisherService: PublisherService
  ) {
    this.modalOptions = {
      backdrop:'static',
      centered: true,
      keyboard: false
    }
  }

  ngOnInit() {
    this.sub = this.userService.user$.subscribe(
      (user: User) => {
        if (!user.first_name) {
          this.ngbModal.open(CollectUserNamesComponent, this.modalOptions)
        }
      }
    )

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

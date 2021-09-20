import { Component, OnInit, OnDestroy } from '@angular/core'
import { PublisherService } from './../../catalogue/publisher/publisher.service'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'

import { CollectUserNamesComponent } from './components/collect-user-names/collect-user-names.component'
import { ActivitiesService } from './activities.service'
import { UserService } from '../../../core/services/user/user.service'
import { User } from '../../../core/models/user.model'
import { ChapterIndexService } from './sidebar/chapter-index/chapter-index.service'
import { ThemeService } from '../../../core/services/theme/theme.service'

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
    private route: ActivatedRoute,
    private ngbModal: NgbModal,
    public activitiesService: ActivitiesService,
    private userService: UserService,
    private chapterIndexService: ChapterIndexService,
    private themeService: ThemeService,
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
        if (!user.firstName) {
          this.ngbModal.open(CollectUserNamesComponent, this.modalOptions)
        }
      }
    )

    this.activitiesService.chapterIndex$ = this.chapterIndexService.getChapterIndex(
      this.route.snapshot.params.aid
    )

    // this.publisherService.getPublisher(this.route.snapshot.params.aid, 'aid').subscribe(
    //   (publisherInfo) => {
    //     this.themeService.changeTheme(publisherInfo.theme)
    //   }
    // )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

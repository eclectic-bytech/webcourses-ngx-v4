import { Component, OnInit } from '@angular/core'
import { PublisherService } from './../../catalogue/publisher/publisher.service'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'

import { CollectUserNamesComponent } from './components/collect-user-names/collect-user-names.component'
import { ActivitiesService } from './activities.service'
import { UserService } from '../../../core/services/user/user.service'
import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'
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
export class ActivitiesComponent implements OnInit {

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
    public publisherService: PublisherService
  ) {
    this.modalOptions = {
      backdrop:'static',
      centered: true,
      keyboard: false
    }
  }

  ngOnInit() {
    if (!this.userService.user.first_name) {
      const comp = this.ngbModal.open(CollectUserNamesComponent, this.modalOptions)
      comp.componentInstance.user = this.userService.user
    }
  }

}

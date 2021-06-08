import { Component, OnInit, Input } from '@angular/core'
import { TaxStatusService } from '../../../../core/services/tax-status/tax-status.service'
import { Publisher } from 'src/app/models/publisher.model'
import { Course } from './../../../../models/course.model'

@Component({
  selector: 'app-catalogue-card',
  templateUrl: './catalogue-card.component.html',
  styleUrls: ['./catalogue-card.component.sass']
})
export class CatalogueCardComponent implements OnInit {

  @Input() course: Course
  @Input() publisherInfo: Publisher
  public myWebcoursesPage = false

  // why we need this:
  // publisherInfo is only passed in 'my web webcourses' area. see ngOnInit for more info.
  public publisher: Publisher

  public showCouponInput: number

  constructor(
    public taxService: TaxStatusService
  ) { }

  ngOnInit() {
    // My web courses gets publisher info from /publisher/profile, passed to the card via @Input binding
    // Main & publisher catalogue have different info per course - its source is course.publisher
    this.myWebcoursesPage = this.publisherInfo ? true : false
    this.publisher = this.myWebcoursesPage ? this.publisherInfo : this.course.publisher
  }

  showCouponInputToggle(cid: number) {
    this.showCouponInput = (this.showCouponInput) ? null : cid
  }

}

import { Component, OnInit, Input } from '@angular/core'
import { TaxStatusService } from '../../../../core/services/tax-status/tax-status.service'
import { Course } from './../../../../models/course.model'

@Component({
  selector: 'app-catalogue-card',
  templateUrl: './catalogue-card.component.html',
  styleUrls: ['./catalogue-card.component.sass']
})
export class CatalogueCardComponent implements OnInit {

  @Input() course: Course
  public showCouponInput: number

  constructor(
    public taxService: TaxStatusService
  ) { }

  ngOnInit() {
  }

  showCouponInputToggle(cid: number) {
    this.showCouponInput = (this.showCouponInput) ? null : cid
  }

}

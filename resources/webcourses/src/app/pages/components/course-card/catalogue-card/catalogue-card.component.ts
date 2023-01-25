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

  // why we need this:
  // publisherInfo is only passed in 'my web webcourses' area. see ngOnInit for more info.
  public publisher: Publisher

  constructor(
    public taxService: TaxStatusService
  ) { }

  ngOnInit(): void {
  }

}

import { Component, Input } from '@angular/core'
import { faDiagramProject, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Publisher } from 'src/app/models/publisher.model'
import { Course } from 'src/app/models/course.model'

@Component({
  selector: 'app-catalogue-card',
  templateUrl: './catalogue-card.component.html',
  styleUrls: ['./catalogue-card.component.scss']
})
export class CatalogueCardComponent {

  @Input() course: Course
  @Input() publisherInfo: Publisher

  public faDiagramProject = faDiagramProject
  public faUserGroup = faUserGroup

  // why we need this:
  // publisherInfo is only passed in 'my web webcourses' area. see ngOnInit for more info.
  public publisher: Publisher

  constructor() { }

}

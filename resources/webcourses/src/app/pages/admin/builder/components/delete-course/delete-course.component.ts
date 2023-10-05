import { Component } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'wngx-delete-course',
  standalone: true,
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.scss']
})

export class DeleteCourseComponent {
  constructor(
    public ngbActiveModal: NgbActiveModal
  ) {}
}

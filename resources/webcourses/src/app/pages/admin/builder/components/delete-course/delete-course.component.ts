import { Component } from '@angular/core'
import { NgIf, NgClass } from '@angular/common'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { DeleteCourseService } from './delete-course.service'

@Component({
  selector: 'wngx-delete-course',
  standalone: true,
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.scss'],
  imports: [NgIf, NgClass]
})

export class DeleteCourseComponent {

  public deleteLock = true

  constructor(
    public ngbActiveModal: NgbActiveModal,
    public deleteCourseService: DeleteCourseService
  ) {}

  get hasStudents(): boolean {
    return this.deleteCourseService.course.total_students === 0 ? false : true
  }
}

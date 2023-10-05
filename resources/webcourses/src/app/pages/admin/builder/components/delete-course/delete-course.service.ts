import { Injectable } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { DeleteCourseComponent } from './delete-course.component'
import { Course } from 'src/app/models/course.model'

@Injectable({
  providedIn: 'root'
})
export class DeleteCourseService {

  public course: Course

  constructor(
    private ngbModal: NgbModal
  ) { }

  deleteCourseModal(course: Course) {
    this.course = course
    this.ngbModal.open(DeleteCourseComponent, {
      size: 'md', centered: true
    })
  }

}

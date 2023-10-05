import { Injectable } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { DeleteCourseComponent } from './delete-course.component'
import { Course } from 'src/app/models/course.model'
import { HttpClient } from '@angular/common/http'
import { ConfigService } from 'src/app/core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class DeleteCourseService {

  public course: Course

  constructor(
    private ngbModal: NgbModal,
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  deleteCourseModal(course: Course) {
    this.course = course
    this.ngbModal.open(DeleteCourseComponent, {
      size: 'md', centered: true
    })
  }

  deleteCourse() {
    this.httpClient.delete(`
      ${this.configService.params.api.route}/admin/course/${this.course.id}`
    ).subscribe(
      (success) => {
        if (success) {
          let elem = document.getElementById('course-id-' + this.course.id)
          elem.parentNode.removeChild(elem)
        }
      },
      (err) => { console.log(err) },
      () => { this.ngbModal.dismissAll() }
    )
  }

}

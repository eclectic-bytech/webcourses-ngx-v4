import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseAccessBlockService } from './course-access-block.service';
import { AccessCodeModalComponent } from '../../../access-code-modal/access-code-modal.component';
import { AccessCodeModalService } from '../../../access-code-modal/access-code-modal.service';

@Component({
  selector: 'app-course-access-block',
  templateUrl: './course-access-block.component.html',
  styleUrls: ['./course-access-block.component.sass']
})
export class CourseAccessBlockComponent implements OnInit {

  @Input() course: Course

  public showCouponInput = false

  constructor(
    private router: Router,
    private ngbModal: NgbModal,
    public courseAccessBlockService: CourseAccessBlockService,
    private accessCodeModalService: AccessCodeModalService
  ) { }

  ngOnInit(): void {
  }

  accessCodeModal(course: Course) {
    this.accessCodeModalService.course = course
    this.ngbModal.open(AccessCodeModalComponent, {
      size: 'md', centered: true
    })
  }

  goToActivity(pid: number) {
    // When course is completed, first aid in course is fetched. Otherwise, last completed.
    this.courseAccessBlockService.getDestinationAid(pid).subscribe(
      (resume: any) => {
        this.router.navigateByUrl(`/webcourse/activities/${resume.aid}`)
      }
    )
  }

}

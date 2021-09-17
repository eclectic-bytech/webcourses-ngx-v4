import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseAccessBlockService } from './course-access-block.service';

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
    public courseAccessBlockService: CourseAccessBlockService
  ) { }

  ngOnInit(): void {
  }

  goToActivity(pid: number, firstAid: boolean) {
    // When course is completed, first aid in course is fetched. Otherwise, last completed.
    this.courseAccessBlockService.getDestinationAid(pid, firstAid).subscribe(
      (lastAnswer: any) => {
        this.router.navigateByUrl(`/webcourse/activities/${lastAnswer.activity_id}`)
      }
    )
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-access-block',
  templateUrl: './course-access-block.component.html',
  styleUrls: ['./course-access-block.component.sass']
})
export class CourseAccessBlockComponent implements OnInit {

  @Input() course: Course

  public showCouponInput = false

  constructor() { }

  ngOnInit(): void {
  }

}

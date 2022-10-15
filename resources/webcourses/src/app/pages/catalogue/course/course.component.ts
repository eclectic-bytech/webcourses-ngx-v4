import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { CourseService } from './course.service'
import { FadeInOut } from '../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [FadeInOut]
})
export class CourseComponent implements OnInit {

  constructor(
    public courseService: CourseService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseService.courseInfo$ = this.courseService.getCourse(params.cid)
      }
    )
  }

}

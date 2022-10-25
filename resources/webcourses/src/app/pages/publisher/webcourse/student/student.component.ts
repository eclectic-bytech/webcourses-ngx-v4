import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router'
import { Publisher } from '../../../../models/publisher.model'
import { FadeInOut } from '../../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-student-course-progress',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass'],
  animations: [FadeInOut]
})

export class StudentComponent implements OnInit {

  studentActivities$: Observable<any>
  publisherInfo$: Observable<Publisher>

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.studentActivities$ = this.route.data.pipe(map(data => data.student))
    this.publisherInfo$ = this.route.data.pipe(map(data => data.publisherInfo))
  }

}

import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router'
import { StudentsService } from './students.service'
import { Publisher } from '../../../../models/publisher.model'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FadeInOut } from '../../../../core/animations/fade-in-out.animation'
import { WebcoursesService } from '../../webcourses/webcourses.service'

@Component({
  selector: 'app-course-progress',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass'],
  animations: [FadeInOut]
})
export class StudentsComponent implements OnInit {

  faBook = faBook

  courseStudents$: Observable<any[]>
  courseStudentGroups$: Observable<any[]>
  publisherInfo$: Observable<Publisher>
  publisherCourseInfo$: Observable<any>

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public webcoursesService: WebcoursesService,
    public studentReportService: StudentsService
  ) { }

  ngOnInit() {
    this.courseStudents$ = this.route.data.pipe(map(data => data.students))
    this.courseStudentGroups$ = this.route.data.pipe(map(data => data.studentsGroups))
    this.publisherInfo$ = this.route.data.pipe(map(data => data.publisherInfo))
    this.publisherCourseInfo$ = this.webcoursesService.getWebcourses(this.route.snapshot.params.cid)
  }


}

import { Component, OnInit } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

// WNGX imports
import { ConfigService } from 'src/app/core/services/config/config.service'
import { Course } from 'src/app/models/course.model'
import { ActivatedRoute } from '@angular/router'
import { CourseService } from 'src/app/pages/catalogue/course/course.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [FadeInOut]
})

export class CourseComponent implements OnInit {

  public hideAdvanced = true
  public courseAdded = false
  public courseAddForm: FormGroup
  public course: Course

  constructor(
    public fb: FormBuilder,
    private configService: ConfigService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.courseAddForm = this.fb.group({
      title: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(128),
          Validators.pattern('\\s?\\S+(?: \\S+)*\\s?') // no consec spaces
        ])],
      shortDesc: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(32),
          Validators.maxLength(256),
          Validators.pattern('\\s?\\S+(?: \\S+)*\\s?') // no consec spaces
        ])],
      price: [20, Validators.compose(
        [
          Validators.required,
          Validators.min(0),
          Validators.max(99999),
          Validators.pattern("^[0-9]*$")
        ]
      )],
      private: '',
      audience: '',
      longDesc: '',
      objective: '',
      evalType: '',
    })
  }

  ngOnInit() {
    let cid = this.activatedRoute.snapshot.paramMap.get('cid')
    this.courseService.getCourse(cid).subscribe(
      (course: Course) => {
        this.course = course
        this.courseAddForm.value.title = this.course.title
        this.courseAddForm.setValue({ ...this.courseAddForm.value, title: this.course.title });
        console.log(this.courseAddForm.value)
      }
    )
  }

  onSubmit(): void {
    this.httpClient.post(
      `${this.configService.params.api.route}/admin/publisher/course`,
      this.courseAddForm.value
    ).subscribe(
      (course: Course) => {
        this.courseAdded = true
        this.course = course
      },
      (err) => {
        console.log(err)
      }
    )
  }

}

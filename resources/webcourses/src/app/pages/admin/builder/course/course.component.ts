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

  public courseAddForm: FormGroup
  public hideAdvanced = true
  public courseAdded = false

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
      short_desc: ['', Validators.compose(
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
      long_desc: '',
      objective: '',
      eval_type: '',
    })
  }

  ngOnInit() {
    this.courseService.getAdminCourse(this.cid).subscribe(
      (course: Course) => {
        this.courseAddForm.patchValue(course)
        this.courseAddForm.controls.price.patchValue(course.price / 100)
      }
    )
  }

  onSubmit(): void {
    this.httpClient.post<Course>(
      `${this.configService.params.api.route}/admin/publisher/course`,
      this.courseAddForm.value
    ).subscribe(
      (course: Course) => {
        this.courseAdded = true
      }
    )
  }

  onUpdate() {
    console.log('Update course')
  }

  get cid() {
    return this.activatedRoute.snapshot.paramMap.get('cid')
  }

}

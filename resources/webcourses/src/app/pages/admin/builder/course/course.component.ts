import { Component, OnInit } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { MatSnackBar } from '@angular/material/snack-bar'

// WNGX imports
import { ConfigService } from 'src/app/core/services/config/config.service'
import { Course } from 'src/app/models/course.model'
import { ActivatedRoute, Router } from '@angular/router'
import { CourseService } from 'src/app/pages/catalogue/course/course.service'
import { DeleteCourseService } from '../components/delete-course/delete-course.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [FadeInOut]
})

export class CourseComponent implements OnInit {

  public courseAddForm: FormGroup
  public course = new Course
  public hideAdvanced = true
  public waitingForApi = false

  constructor(
    public fb: FormBuilder,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackbar: MatSnackBar,
    private courseService: CourseService,
    private configService: ConfigService,
    public deleteCourseService: DeleteCourseService
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
    if (this.cid) {
      this.courseService.getAdminCourse(this.cid).subscribe(
        (course: Course) => {
          this.course = course
          this.courseAddForm.patchValue(course)
          this.courseAddForm.controls.price.patchValue(course.price / 100)
        }
      )
    }
  }

  onSubmit(): void {
    this.waitingForApi = true
    this.httpClient.post<Course>(
      `${this.configService.params.api.route}/admin/publisher/course`,
      this.courseAddForm.value
    ).subscribe(
      (course: Course) => {
        this.router.navigate(['/admin', 'publisher', 'builder', 'sorry'])
      },
      (err) => {},
      () => { this.waitingForApi = false }
    )
  }

  onUpdate() {
    this.waitingForApi = true
    this.httpClient.patch<Course>(
      `${this.configService.params.api.route}/admin/publisher/course/edit/${this.cid}`,
      this.courseAddForm.value
    ).subscribe(
      (course: Course) => {
        this.course = course
        this.snackbarNotify('Course updated.')
      },
      (err) => { this.snackbarNotify('Failed to update course.') },
      () => { this.waitingForApi = false }
    )
  }

  deleteCourseBtn() {
    this.deleteCourseService.deleteCourseModal(this.course)
  }

  snackbarNotify(message: string) {
    this._snackbar.open(message, '', {
      duration: 3000
    })
  }

  get cid() {
    return this.activatedRoute.snapshot.paramMap.get('cid')
  }

}

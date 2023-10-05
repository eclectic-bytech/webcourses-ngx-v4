import { Component } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

// WNGX imports
import { ConfigService } from 'src/app/core/services/config/config.service'
import { Course } from 'src/app/models/course.model'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [FadeInOut]
})

export class CourseComponent {

  public hideAdvanced = true
  public courseAdded = false
  public courseAddForm: FormGroup
  public course: Course

  constructor(
    public fb: FormBuilder,
    private configService: ConfigService,
    private httpClient: HttpClient
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

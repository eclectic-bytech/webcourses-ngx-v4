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
  course: FormGroup

  constructor(
    public fb: FormBuilder,
    private configService: ConfigService,
    private httpClient: HttpClient
  ) {
    this.course = this.fb.group({
      title: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(128),
          Validators.pattern('\\s?\\S+(?: \\S+)*\\s?') // no consec spaces
        ])],
      private: '',
      audience: '',
      shortDesc: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(256),
          Validators.pattern('\\s?\\S+(?: \\S+)*\\s?') // no consec spaces
        ])],
      longDesc: '',
      objective: '',
      evalType: '',
      price: ['', Validators.compose(
        [
          Validators.required,
          Validators.maxLength(7),
          Validators.pattern("^[0-9]*$")
        ]
      )]
    })
  }

  onSubmit(): void {
    this.httpClient.post(
      `${this.configService.params.api.route}/admin/publisher/course`,
      this.course.value
    ).subscribe(
      (course: Course) => {
        console.log(course)
      },
      (err) => {
        console.log(err)
      }
    )
  }

}

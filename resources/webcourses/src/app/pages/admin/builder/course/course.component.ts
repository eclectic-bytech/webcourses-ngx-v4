import { Component } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { FormBuilder, FormGroup } from '@angular/forms'
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

  course: FormGroup

  constructor(
    public fb: FormBuilder,
    private configService: ConfigService,
    private httpClient: HttpClient
  ) {
    this.course = this.fb.group({
      title: '',
      private: '',
      audience: '',
      shortDesc: '',
      longDesc: '',
      objective: '',
      evalType: '',
      price: '',
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

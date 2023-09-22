import { Component } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [FadeInOut]
})

export class CourseComponent {

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    })
  }

}

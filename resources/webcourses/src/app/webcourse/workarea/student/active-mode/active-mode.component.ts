import { Component, Input, OnInit } from '@angular/core'
import { UntypedFormBuilder, Validators } from '@angular/forms'

import { ActiveModeService } from './active-mode.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { Activity } from 'src/app/webcourse/models/activity.model'

@Component({
  selector: 'app-active-mode',
  templateUrl: './active-mode.component.html',
  styleUrls: ['./active-mode.component.scss']
})
export class ActiveModeComponent implements OnInit {

  @Input() activity: Activity

  constructor(
    public fb: UntypedFormBuilder,
    public user: UserService,
    public activeModeService: ActiveModeService
  ) {}

  ngOnInit() {
    const answerValidators = {
      radio: ['', Validators.required],
      checkbox: [''], // Dec 22, 2020: This can be removed?
      text: [this.activity.default_answer, Validators.compose([
        Validators.required, Validators.minLength(1)
      ])],
      textarea: [this.activity.default_answer, Validators.compose([
        Validators.required, Validators.minLength(3)
      ])]
    }
    let validator = (this.activity.meta.style == 'image') ? 'radio' : this.activity.meta.activity_type
    this.activeModeService.activityForm = this.fb.group({
      answer: answerValidators[validator]
    })
  }

  updateSelections(i, singleSelection?: boolean) {
    if (singleSelection) {
      for (let y = 0; y < this.activity.answers.length; y++) {
        // deselect all previous selections
        this.activity.answers[y].selected = false
      }
      this.activity.answers[i].selected = true
    } else {
      this.activity.answers[i].selected = !this.activity.answers[i].selected
    }
  }

}

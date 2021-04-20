import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ActiveModeService } from './active-mode.service'
import { UserService } from '../../../../../core/services/user/user.service'
import { Activity } from '../models/activity.model'

@Component({
  selector: 'app-active-mode',
  templateUrl: './active-mode.component.html',
  styleUrls: ['./active-mode.component.scss']
})
export class ActiveModeComponent implements OnInit {

  @Input() activity: Activity

  constructor(
    public fb: FormBuilder,
    public user: UserService,
    public activeModeService: ActiveModeService
    ) {}

  ngOnInit() {
    const answerValidators = {
      radio: ['', Validators.required],
      checkbox: [''], // Dec 22, 2020: This can be removed?
      text: [this.activity.default_answer, Validators.required],
      textarea: [this.activity.default_answer, Validators.required]
    }
    this.activeModeService.activityForm = this.fb.group({ answer: answerValidators[this.activity.meta.type] })
  }

  updateSelections(i) {
    this.activity.answers[i].selected = !this.activity.answers[i].selected
  }

}

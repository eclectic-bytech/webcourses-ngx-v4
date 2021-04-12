import { Component, OnInit } from '@angular/core'
import { AuthService2 } from './../../../core/services/auth/auth2.service'

@Component({
  selector: 'app-login-prompt',
  template: ''
})
export class LoginPromptComponent implements OnInit {

  constructor(
    private auth2: AuthService2
  ) { }

  ngOnInit() {
    this.auth2.login()
  }

}

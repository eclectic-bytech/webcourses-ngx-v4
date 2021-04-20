import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService2 } from './core/services/auth/auth2.service'

@Component({
  selector: 'app-login-redirect',
  template: ''
})
export class LoginRedirectComponent implements OnInit {

  constructor(
    private auth2: AuthService2,
    private router: Router
  ) { }

  ngOnInit() {
    (this.auth2.loggedIn) ? this.router.navigateByUrl('/user/webcourses') : this.auth2.login()
  }

}

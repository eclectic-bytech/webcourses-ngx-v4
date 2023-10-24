import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'

import { ConfigService } from 'src/app/core/services/config/config.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'wngx-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss'],
  animations: [FadeInOut]
})
export class UnderConstructionComponent {

  public subscribe = false

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar,
    private configService: ConfigService,
    public userService: UserService
  ) {}

  continueBtn() {
    if (this.subscribe) {
      this.newSubscriber()
    } else {
      this.router.navigateByUrl('/admin/publisher/courses')
    }
  }

  newSubscriber() {
    this.httpClient.post(
      `${this.configService.params.api.route}/user/role/builder-sub`, ''
    ).subscribe(
      () => {
        this._snackBar.open('Thank you for subscribing!', '', {
          duration: 3000
        })
      },
      (err) => {},
      () => {
        this.router.navigateByUrl('/admin/publisher/courses')
      }
    )
  }
}

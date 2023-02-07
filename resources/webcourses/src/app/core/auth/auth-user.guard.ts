import { Injectable } from '@angular/core'
import { CanActivate, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { UserService } from 'src/app/core/services/user/user.service'
import { SessionExpiredService } from '../modals/session-expired/session-expired.service'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class AuthUserGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private sessionExpiredService: SessionExpiredService
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {

    return this.userService.getUser().pipe(map(
      (user) => {
        this.userService.user = user
        if (user) {
          return true
        } else {
          this.sessionExpiredService.sessionExpiredModal(500)
        }
      },
      (err) => {
        this.sessionExpiredService.sessionExpiredModal(err['status'])
      }
    ))
  }

}

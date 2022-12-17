import { Injectable } from '@angular/core'
import { CanActivate, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { UserService } from 'src/app/core/services/user/user.service'

@Injectable({
  providedIn: 'root'
})

export class AuthUserGuard implements CanActivate {

  constructor(
    private userService: UserService
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return this.userService.isLoggedIn$
  }

}

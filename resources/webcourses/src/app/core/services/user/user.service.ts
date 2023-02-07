import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

import { ConfigService } from '../config/config.service'
import { Course } from '../../../models/course.model'
import { JetstreamUser } from '../../models/jetstream-user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: JetstreamUser
  userCourses$: Observable<Course[]> = this.getUserCourses$()

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}

  getUser() {
    return this.httpClient
      .get<JetstreamUser>(`${this.configService.params.api.route}/user/profile`)
      .pipe(profile => profile)
  }

  getUserCourses$(): Observable<Course[]> {
    this.userCourses$ = this.httpClient
      .get<Course[]>(`${this.configService.params.api.route}/catalogue/user`)
      .pipe(shareReplay(1))
    return this.userCourses$
  }

  localUserSession() {
    if (!this.user && this.configService.params.devMode) {
      this.getUser().subscribe(
        (user: JetstreamUser) => {
          // Call will return empty response if user is not logged in.
          // We check for that before overwriting anon user.
          if (user) this.user = user
        }
      )
    } else {
      this.user = null
    }
  }

  userIsPublisher() {
    return (this.user['user_roles'].indexOf(2) !== -1) ? 1 : 0
  }
}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject, Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

import { JetstreamUser } from '../../models/jetstream-user.model'
import { Course } from '../../../models/course.model'
import { ConfigService } from '../config/config.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCourses$: Observable<Course[]> = this.getUserCourses$()

  user$ = new Subject<JetstreamUser>()

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

}

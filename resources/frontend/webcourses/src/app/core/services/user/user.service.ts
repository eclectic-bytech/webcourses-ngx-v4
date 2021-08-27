import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

import { User } from '../../models/user.model'
import { Course } from '../../../models/course.model'
import { ConfigService } from '../config/config.service'
import { UserCourseProgress } from 'src/app/models/user.course.progress.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCourses$: Observable<Course[]> = this.getUserCourses$()
  UserCourseProgress$: Observable<UserCourseProgress[]> = this.getUserCourseProgress()

  user$ = new BehaviorSubject<User>(<User>{
    id: 0,
    email: '',
    emailVerified: 0,
    firstName: '',
    lastName: '',
    username: 'Anon',
    profile_photo_url: 'default.jpg',
    country: 'Canada',
    roles: ['learner']
  })

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}

  getUser() {
    return this.httpClient
      .get<User>(`/v4/user/profile`)
      .pipe(profile => profile)
  }

  getUserCourses$(): Observable<Course[]> {
    this.userCourses$ = this.httpClient
      .get<Course[]>(`${this.configService.params.api.route}/user/courses`)
      .pipe(shareReplay(1))
    return this.userCourses$
  }

  getUserCourseProgress() {
    this.UserCourseProgress$ = this.httpClient
      .get<UserCourseProgress[]>(`${this.configService.params.api.route}/user/courses/progress`)
      .pipe(shareReplay(1))
    return this.UserCourseProgress$
  }
}

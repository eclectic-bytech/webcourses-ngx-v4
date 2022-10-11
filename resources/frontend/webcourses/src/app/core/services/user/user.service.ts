import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

import { JetstreamUser } from '../../models/jetstream-user.model'
import { Course } from '../../../models/course.model'
import { ConfigService } from '../config/config.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCourses$: Observable<Course[]> = this.getUserCourses$()

  user$ = new BehaviorSubject<JetstreamUser>(<JetstreamUser>{
		id: 1,
		name: "Guest",
		first_name: null,
		last_name: null,
		email: null,
		email_verified_at: null,
		current_team_id: 1,
		profile_photo_path: null,
		created_at: null,
		updated_at: null,
		profile_photo_url: null,
		current_team: {
			id: 1,
			user_id: 1,
			name: "Administrators",
			personal_team: true,
			created_at: null,
			updated_at: null
		},
		all_teams: [
			{
				id: 1,
				user_id: 1,
				name: "Administrators",
				personal_team: true,
				created_at: null,
				updated_at: null,
				membership: {
					user_id: 1,
					team_id: 1,
					role: "Admin role.",
					created_at: null,
					updated_at: null
				}
			},
			{
				id: 2,
				user_id: 1,
				name: "Publishers",
				personal_team: false,
				created_at: null,
				updated_at: null
			}
		],
		two_factor_enabled: false
  })

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

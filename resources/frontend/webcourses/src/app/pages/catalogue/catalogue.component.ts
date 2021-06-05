import { Component, OnInit, OnDestroy } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators'

import { CatalogueService } from './catalogue.service'
import { UserService } from './../../core/services/user/user.service'
import { User } from '../../core/models/user.model'
import { Course } from './../../models/course.model'
import { TaxStatusService } from '../../core/services/tax-status/tax-status.service'
import { AppService } from './../../app.service'
import { ThemeService } from './../../core/services/theme/theme.service'
import { FadeInOut } from '../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.sass'],
  animations: [FadeInOut]
})
export class CatalogueComponent implements OnInit, OnDestroy {

  public webcoursesAll$: Observable<Course[]>
  public user: User
  public themeId: number

  private sub: Subscription = new Subscription()

  constructor(
    private route: ActivatedRoute,
    public localService: CatalogueService,
    public userService: UserService,
    public taxService: TaxStatusService,
    private globalService: AppService,
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    this.globalService.setTitle(this.route.snapshot.data.title)

    this.webcoursesAll$ = this.route.data.pipe(map(data => data.webcoursesAll))

    this.sub = this.userService.user$.subscribe(
      (user: User) => {
        if (user.email) {
          this.userService.getUserCoursesProgress().subscribe(
            (uCourses: any) => {
              console.log(uCourses)
            }
          )
          this.user = user
        }
      },
      (err) => { console.log(err) }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}

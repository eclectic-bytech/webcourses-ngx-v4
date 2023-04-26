import { Component, OnInit, OnDestroy } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators'

import { CatalogueService } from './catalogue.service'
import { UserService } from './../../core/services/user/user.service'
import { Course } from './../../models/course.model'
import { TaxStatusService } from '../../core/services/tax-status/tax-status.service'
import { AppService } from './../../app.service'
import { ThemeService } from './../../core/services/theme/theme.service'
import { FadeInOut } from '../../core/animations/fade-in-out.animation'
import { CourseService } from './course/course.service'
import { ConfigService } from 'src/app/core/services/config/config.service'

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
  animations: [FadeInOut]
})
export class CatalogueComponent implements OnInit {

  public webcoursesAll$: Observable<Course[]>
  public featuredCourse$: Observable<Course>
  public themeId: number


  constructor(
    private route: ActivatedRoute,
    public localService: CatalogueService,
    public userService: UserService,
    public taxService: TaxStatusService,
    private globalService: AppService,
    public themeService: ThemeService,
    private courseService: CourseService,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.globalService.setTitle(this.route.snapshot.data.title)

    this.webcoursesAll$ = this.route.data.pipe(map(data => data.webcoursesAll))
    this.featuredCourse$ = this.courseService.getCourse(this.configService.params.featuredCID)
  }

}

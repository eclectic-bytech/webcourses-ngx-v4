import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators'

import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'

// WNGX services
import { CatalogueService } from './catalogue.service'
import { UserService } from './../../core/services/user/user.service'
import { TaxStatusService } from '../../core/services/tax-status/tax-status.service'
import { AppService } from './../../app.service'
import { ThemeService } from './../../core/services/theme/theme.service'
import { CourseService } from './course/course.service'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { AccessCodeModalService } from '../components/access-code-modal/access-code-modal.service'
import { NavService } from '../webcourse/activities/workarea/nav/nav.service'

// WNGX models and misc
import { Course } from './../../models/course.model'
import { FadeInOut } from '../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
  animations: [FadeInOut]
})
export class CatalogueComponent implements OnInit {

  public featuredCourse$: Observable<Course>
  public themeId: number

  public faDiagramProject = faDiagramProject
  public faUserGroup = faUserGroup

  constructor(
    private route: ActivatedRoute,
    public localService: CatalogueService,
    public userService: UserService,
    public taxService: TaxStatusService,
    private globalService: AppService,
    public themeService: ThemeService,
    private courseService: CourseService,
    private configService: ConfigService,
    private accessCodeModalService: AccessCodeModalService,
    private navService: NavService
  ) { }

  ngOnInit() {
    this.globalService.setTitle(this.route.snapshot.data.title)

    this.localService.webcoursesAll$ = this.route.data.pipe(map(data => data.webcoursesAll))
    this.featuredCourse$ = this.courseService.getCourse(this.configService.params.featuredCID)
  }

  freebieAccess(course: Course) {
    if (!this.userService.user) {
      window.location.href = `/user/register?code=C-OPEN-WNGX`
    } else {
      if (course.user_progress) {
        this.navService.NavigateByAid(course.user_progress.selected_aid)
      } else {
        this.accessCodeModalService.accessCodeModal()
        this.accessCodeModalService.defaultCode = "C-OPEN-WNGX"
        this.accessCodeModalService.submitCode('C-OPEN-WNGX')
      }
    }
  }

}

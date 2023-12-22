import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { GravatarMd5Service } from 'src/app/core/services/gravatar-md5/gravatar-md5.service'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'

// WNGX services
import { AppService } from 'src/app/app.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { AccessCodeModalService } from 'src/app/pages/components/access-code-modal/access-code-modal.service'
import { CourseService } from 'src/app/pages/catalogue/course/course.service'
import { WebcoursesService } from './webcourses.service'
import { NavService } from 'src/app/pages/webcourse/activities/workarea/nav/student/nav.service'

// WNGX models and misc
import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'
import { Course } from 'src/app/models/course.model'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-webcourses',
  templateUrl: './webcourses.component.html',
  styleUrls: ['./webcourses.component.scss'],
  animations: [FadeInOut]
})

export class WebcoursesComponent implements OnInit, OnDestroy {

  public faDiagramProject = faDiagramProject

  public showGroupCodeInput = false
  public user$: Observable<JetstreamUser> = this.userService.getUser()
  public userSelectedCourse$: Observable<Course>
  private subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    public gravatarMd5: GravatarMd5Service,
    public webcoursesService: WebcoursesService,
    private appService: AppService,
    public accessCodeModalService: AccessCodeModalService,
    public userService: UserService,
    private courseService: CourseService,
    private navService: NavService
  ) { }

  ngOnInit() {
    this.appService.setTitle(this.route.snapshot.data.title)
    this.accessCodeRoutine()

    this.subscription = this.userService.getUser().subscribe(
      (user: JetstreamUser) => {
        this.userSelectedCourse$ = this.courseService.getCourse(user.current_course_id)
      }
    )
  }

  enterButton(aid: number) {
    this.navService.NavigateByAid(aid)
  }

  accessCodeRoutine() {
    if (this.route.snapshot.queryParamMap.get('code')) {
      this.accessCodeModalService.accessCodeModal()
      this.accessCodeModalService.defaultCode = this.route.snapshot.queryParamMap.get('code')
      this.accessCodeModalService.submitCode(this.route.snapshot.queryParamMap.get('code'))
    }
  }

  percentDone(ta: number, tac: number, type: string) {
    let percent = Math.round(tac ? tac / ta * 100 : 0)
    if (type === 'integer') {
      return percent
    } else if (type === 'string') {
      return percent + '% Done'
    } else {
      return "Numeric stat not available"
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}

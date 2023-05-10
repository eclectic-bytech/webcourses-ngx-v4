import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { GravatarMd5Service } from 'src/app/core/services/gravatar-md5/gravatar-md5.service'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'

import { AppService } from '../../../app.service'
import { UserService } from '../../../core/services/user/user.service'
import { FadeInOut } from '../../../core/animations/fade-in-out.animation'
import { AccessCodeModalService } from '../../components/access-code-modal/access-code-modal.service'
import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'
import { CourseService } from '../../catalogue/course/course.service'
import { Course } from 'src/app/models/course.model'
import { WebcoursesService } from './webcourses.service'

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
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.appService.setTitle(this.route.snapshot.data.title)
    if (this.route.snapshot.queryParamMap.get('code')) {
      this.accessCodeModalService.accessCodeModal()
      this.accessCodeModalService.defaultCode = this.route.snapshot.queryParamMap.get('code')
      this.accessCodeModalService.submitCode(this.route.snapshot.queryParamMap.get('code'))
    }

    this.subscription = this.userService.getUser().subscribe(
      (user: JetstreamUser) => {
        this.userSelectedCourse$ = this.courseService.getCourse(user.current_course_id)
      }
    )
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

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { GravatarMd5Service } from 'src/app/core/services/gravatar-md5/gravatar-md5.service'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'

import { ConfigService } from 'src/app/core/services/config/config.service'
import { AppService } from '../../../app.service'
import { UserService } from '../../../core/services/user/user.service'
import { FadeInOut } from '../../../core/animations/fade-in-out.animation'
import { AccessCodeModalService } from '../../components/access-code-modal/access-code-modal.service'
import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'
import { HttpClient } from '@angular/common/http'
import { CourseService } from '../../catalogue/course/course.service'
import { Course } from 'src/app/models/course.model'

@Component({
  selector: 'app-webcourses',
  templateUrl: './webcourses.component.html',
  styleUrls: ['./webcourses.component.scss'],
  animations: [FadeInOut]
})
export class WebcoursesComponent implements OnInit {

  public faDiagramProject = faDiagramProject

  public showGroupCodeInput = false
  public user$: Observable<JetstreamUser> = this.userService.getUser()
  public userSelectedCourse$: Observable<Course>
  private subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public gravatarMd5: GravatarMd5Service,
    private appService: AppService,
    public accessCodeModalService: AccessCodeModalService,
    public userService: UserService,
    private configService: ConfigService,
    private httpClient: HttpClient,
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

  goToActivity(pid: number) {
    // When course is completed, first aid in course is fetched. Otherwise, last completed.
    this.getDestinationAid(pid).subscribe(
      (resume: any) => {
        this.router.navigateByUrl(`/webcourse/activities/${resume.aid}`)
      }
    )
  }

  getDestinationAid(pid: number) {
    return this.httpClient
      .get<{}>(`
        ${this.configService.params.api.route}/user/course/${pid}/resume/
      `).pipe(resume => resume)
  }

  percentDone(ta: number, tac: number, type: string) {
    let percent = tac ? tac / ta * 100 : 0
    if (type === 'integer') {
      return percent
    } else if (type === 'string') {
      return percent + '% Done'
    } else {
      return "Numeric stats no available"
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}

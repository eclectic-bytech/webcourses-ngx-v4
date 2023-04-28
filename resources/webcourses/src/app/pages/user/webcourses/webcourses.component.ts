import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { GravatarMd5Service } from 'src/app/core/services/gravatar-md5/gravatar-md5.service'


import { ConfigService } from 'src/app/core/services/config/config.service'
import { AppService } from '../../../app.service'
import { UserService } from '../../../core/services/user/user.service'
import { FadeInOut } from '../../../core/animations/fade-in-out.animation'
import { AccessCodeModalService } from '../../components/access-code-modal/access-code-modal.service'
import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-webcourses',
  templateUrl: './webcourses.component.html',
  styleUrls: ['./webcourses.component.scss'],
  animations: [FadeInOut]
})
export class WebcoursesComponent implements OnInit {

  public showGroupCodeInput = false
  public user$: Observable<JetstreamUser> = this.user.getUser()

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public gravatarMd5: GravatarMd5Service,
    private appService: AppService,
    private accessCodeModalService: AccessCodeModalService,
    public user: UserService,
    private configService: ConfigService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.appService.setTitle(this.route.snapshot.data.title)
    if (this.route.snapshot.queryParamMap.get('code')) {
      this.accessCodeModalService.accessCodeModal()
      this.accessCodeModalService.defaultCode = this.route.snapshot.queryParamMap.get('code')
      this.accessCodeModalService.submitCode(this.route.snapshot.queryParamMap.get('code'))
    }
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

}

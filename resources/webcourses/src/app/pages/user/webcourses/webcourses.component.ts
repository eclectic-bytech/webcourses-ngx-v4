import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AppService } from '../../../app.service'
import { UserService } from '../../../core/services/user/user.service'
import { FadeInOut } from '../../../core/animations/fade-in-out.animation'
import { AccessCodeModalService } from '../../components/access-code-modal/access-code-modal.service'

@Component({
  selector: 'app-webcourses',
  templateUrl: './webcourses.component.html',
  styleUrls: ['./webcourses.component.scss'],
  animations: [FadeInOut]
})
export class WebcoursesComponent implements OnInit {

  public showGroupCodeInput = false

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private accessCodeModalService: AccessCodeModalService,
    public user: UserService
  ) { }

  ngOnInit() {
    this.appService.setTitle(this.route.snapshot.data.title)
    if (this.route.snapshot.queryParamMap.get('code')) {
      this.accessCodeModalService.accessCodeModal()
      this.accessCodeModalService.defaultCode = this.route.snapshot.queryParamMap.get('code')
      this.accessCodeModalService.submitCode(this.route.snapshot.queryParamMap.get('code'))
    }
  }

}

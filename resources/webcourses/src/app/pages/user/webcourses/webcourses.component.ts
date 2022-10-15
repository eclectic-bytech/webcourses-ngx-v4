import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AppService } from '../../../app.service'
import { UserService } from '../../../core/services/user/user.service'
import { FadeInOut } from '../../../core/animations/fade-in-out.animation'

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
    public user: UserService
  ) { }

  ngOnInit() {
    this.appService.setTitle(this.route.snapshot.data.title)
  }

}

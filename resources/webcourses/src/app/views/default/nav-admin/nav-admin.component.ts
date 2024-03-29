import { Component, OnInit } from '@angular/core'
import { JetstreamUser } from 'src/app/core/models/jetstream-user.model'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { UserService } from 'src/app/core/services/user/user.service'

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss']
})

export class NavAdminComponent implements OnInit {

  constructor(
    public configService: ConfigService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user: JetstreamUser) => {
        if (user) this.userService.user = user
      }
    )
  }

}

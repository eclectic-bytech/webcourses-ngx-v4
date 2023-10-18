import { Component } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { UserService } from 'src/app/core/services/user/user.service'

@Component({
  selector: 'wngx-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss'],
  animations: [FadeInOut]
})
export class UnderConstructionComponent {

  constructor(
    public userService: UserService
  ) {

  }
}

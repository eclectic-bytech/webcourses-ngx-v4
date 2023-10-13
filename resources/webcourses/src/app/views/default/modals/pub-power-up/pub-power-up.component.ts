import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { PubPowerUpService } from './pub-power-up.service'
import { UserService } from 'src/app/core/services/user/user.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'wngx-pub-power-up',
  standalone: true,
  imports: [CommonModule],
  animations: [FadeInOut],
  templateUrl: './pub-power-up.component.html',
  styleUrls: ['./pub-power-up.component.scss']
})
export class PubPowerUpComponent {

  constructor(
    public ngbActiveModal: NgbActiveModal,
    public pubPowerUpService: PubPowerUpService,
    public userService: UserService
  ) {}

}

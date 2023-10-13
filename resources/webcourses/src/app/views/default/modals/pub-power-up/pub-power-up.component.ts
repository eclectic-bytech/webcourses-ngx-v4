import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { PubPowerUpService } from './pub-power-up.service'

@Component({
  selector: 'wngx-pub-power-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pub-power-up.component.html',
  styleUrls: ['./pub-power-up.component.scss']
})
export class PubPowerUpComponent {

  constructor(
    public ngbActiveModal: NgbActiveModal,
    public pubPowerUpService: PubPowerUpService
  ) {}

}

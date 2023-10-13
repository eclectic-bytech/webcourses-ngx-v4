import { Injectable } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { PubPowerUpComponent } from './pub-power-up.component'

@Injectable({
  providedIn: 'root'
})
export class PubPowerUpService {

  constructor(
    private ngbModal: NgbModal
  ) { }

  pubPowerUp() {
    this.ngbModal.open(PubPowerUpComponent, {
      size: 'md', centered: true
    })
  }
}

import { Injectable } from '@angular/core'
import { JetstreamUser } from '../../models/jetstream-user.model'

@Injectable({
  providedIn: 'root'
})
export class TaxStatusService {

  public gstApplies = true

  constructor() { }

  taxesApply(user: JetstreamUser) {
    // this.gstApplies = (user.country === 'Canada') ? true : false
    this.gstApplies = true
  }

}

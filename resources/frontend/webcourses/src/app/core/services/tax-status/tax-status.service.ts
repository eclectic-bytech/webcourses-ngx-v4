import { Injectable } from '@angular/core'
import { User } from '../../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class TaxStatusService {

  public gstApplies = true

  constructor() { }

  taxesApply(user: User) {
    this.gstApplies = (user.profile.country === 'Canada') ? true : false
  }

}

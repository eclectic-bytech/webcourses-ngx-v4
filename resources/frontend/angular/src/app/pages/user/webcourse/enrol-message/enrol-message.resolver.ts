import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Observable } from 'rxjs'

import { EnrolMessageService } from './enrol-message.service'


@Injectable()
export class EnrolMessageResolver implements Resolve<Observable<any>> {

  constructor(
    private enrolMessageService: EnrolMessageService
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    return this.enrolMessageService.getEnrolMessage(+route.paramMap.get('cid'))
  }

}

import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { StudentService } from './student.service'

@Injectable()
export class StudentResolver implements Resolve<Observable<any[]>> {

  constructor(
    private localService: StudentService
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any[]> {
    return this.localService.getCompletedActivities(route.params.cid, route.params.uid)
  }

}

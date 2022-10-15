import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { StudentsService } from './students.service'

@Injectable()
export class StudentsResolver implements Resolve<Observable<any[]>> {

  constructor(
    private localService: StudentsService
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any[]> {
    return this.localService.getCourseProgress(route.params.cid)
  }

}

import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { StudentsService } from './students.service'

@Injectable()
export class StudentsGroupsResolver implements Resolve<Observable<any[]>> {

  constructor(
    private localService: StudentsService
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<any[]> {
    return this.localService.getCourseStudentsGroups(route.params.cid)
  }

}

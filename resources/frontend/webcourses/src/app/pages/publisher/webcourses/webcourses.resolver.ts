import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { WebcoursesService } from './webcourses.service'

@Injectable()
export class WebcoursesResolver implements Resolve<Observable<any[]>> {

  constructor(
    private localService: WebcoursesService
  ) {}

  public resolve(): Observable<any[]> {
    return this.localService.getWebcourses(null)
  }

}

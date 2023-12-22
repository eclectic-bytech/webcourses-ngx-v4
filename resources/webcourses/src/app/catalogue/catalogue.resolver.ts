import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { CatalogueService } from './catalogue.service'
import { Course } from 'src/app/models/course.model'

@Injectable()
export class CatalogueResolver implements Resolve<Observable<Course>> {

  constructor(
    public catalogueService: CatalogueService
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Course> {
    return this.catalogueService.getWebcourseCatalogue(route.paramMap.get('pub_id'))
  }

}

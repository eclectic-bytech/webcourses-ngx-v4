import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { CatalogueService } from './catalogue.service'
import { CatalogueModel } from './models/catalogue.model'

@Injectable()
export class CatalogueResolver implements Resolve<Observable<CatalogueModel>> {

  constructor(
    public catalogueService: CatalogueService
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<CatalogueModel> {
    return this.catalogueService.getWebcourseCatalogue(route.paramMap.get('pub_id'))
  }

}

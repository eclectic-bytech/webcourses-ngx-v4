import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { PublisherService } from './publisher.service'


@Injectable()
export class PublisherResolver implements Resolve<Observable<any>> {

  constructor(
    public publisherService: PublisherService
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    if (route.paramMap.get('aid')) {
      return this.publisherService.getPublisher(route.paramMap.get('aid'), 'aid')
    } else if (route.paramMap.get('pid')) {
      return this.publisherService.getPublisher(route.paramMap.get('pid'), 'pid')
    } else {
      return this.publisherService.getPublisher(route.paramMap.get('pub_id'), 'pub')
    }
  }

}

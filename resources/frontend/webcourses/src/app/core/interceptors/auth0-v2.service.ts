/*
Base code from https://auth0.com/docs/quickstart/spa/angular2/02-calling-an-api
with some modifications:
  - import AuthService2
  - added to catchError next.handle(req) to perform api call despite missing auth token
  - this list is complete as of feb-16-2020
*/

import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { AuthService2 } from './../services/auth/auth2.service'
import { Observable, throwError } from 'rxjs'
import { mergeMap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private auth2: AuthService2) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth2.getTokenSilently$().pipe(
      mergeMap(token => {
        const tokenReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })
        return next.handle(tokenReq)
      }),
      catchError(err => {
        throwError(err)
        return next.handle(req)
      })
    )
  }

}

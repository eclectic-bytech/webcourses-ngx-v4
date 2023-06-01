import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { SessionExpiredService } from '../modals/session-expired/session-expired.service'

@Injectable()
export class UserSessionExpiredInterceptor implements HttpInterceptor {
  constructor(
    private sessionExpiredService: SessionExpiredService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.sessionExpiredService.sessionExpiredModal(401)
        }
        return throwError(error)
      })
    )
  }
}

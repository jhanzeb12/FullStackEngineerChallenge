import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { AlertService } from '@shared/services/alert.service';

@Injectable({ providedIn: 'root' })
export class RequestErrorInterceptor implements HttpInterceptor {

  constructor(public alertService: AlertService) {}

  // generic interceptor to show the errors in toasters...
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(evt => { }),
        catchError(error => {
          // caught error so show it in toastr
          this.alertService.errorAlert(error);
          return throwError(error);
        })
      );
  }
}
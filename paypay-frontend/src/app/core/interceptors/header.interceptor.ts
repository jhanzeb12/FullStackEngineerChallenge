import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommontUtils } from '@shared/utils/common.utils';

@Injectable({ providedIn: 'root' })
export class HeaderInterceptor implements HttpInterceptor {

  // middleware to update headers
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let body = null;
    let headers = null;

    let setHeaders = true;
    // if file is being uploaded, then don't set Content-Type header
    if (request.body instanceof FormData) {
      for (const pair of (request.body as any).entries()) {
        if (pair && pair[1] instanceof File) {
          setHeaders = false;
          break;
        }
      }
    }

    // for all other requests, application/json would be fine.
    if (!request.headers.get('Content-Type') && setHeaders) {
      headers = request.headers
        .set('Content-Type', 'application/json');
      // .set('Content-Type', 'application/x-www-form-urlencoded');
    }

    if (!body) {
      body = request.body;
    }

    if (!headers) {
      headers = request.headers;
    }

    const clonedRequest = request.clone({
      headers,
      body
    });

    return next.handle(clonedRequest);
  }
}
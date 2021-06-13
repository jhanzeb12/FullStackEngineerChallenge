import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { shareReplay, catchError, debounceTime } from 'rxjs/operators';

import { environment } from '@env/environment';
import { AlertService } from './alert.service';
const { apiBaseUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    public http: HttpClient,
    private alertService: AlertService) { }

  private getBaseUrl(url: string) {
    return `${apiBaseUrl}${url}`;
  }

  public get(url: string, options = void 0): Observable<any> {
    return this.http.get(this.getBaseUrl(url), options).pipe(
      shareReplay(),
      catchError(this.handleError.bind(this))
    );
  }

  public post(url: string, formBody: any): Observable<any> {
    return this.http.post(this.getBaseUrl(url), formBody).pipe(
      shareReplay(),
      catchError(this.handleError.bind(this))
    );
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(this.getBaseUrl(url)).pipe(
      shareReplay(),
      catchError(this.handleError.bind(this))
    );
  }

  public put(url: string, formBody: any): Observable<any> {
    return this.http.put<any>(this.getBaseUrl(url), formBody).pipe(
      shareReplay(),
      catchError(this.handleError.bind(this))
    );
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    this.alertService.errorAlert(errorMessage);
    return throwError(errorMessage);
  }
}

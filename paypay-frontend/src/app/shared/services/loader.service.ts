import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor() {}
  public showLoader$: Subject<boolean> = new Subject();

  showLoader() {
    this.showLoader$.next(true);
  }

  hideLoader() {
    this.showLoader$.next(false);
  }
}
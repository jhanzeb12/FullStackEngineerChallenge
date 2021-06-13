import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService) { }

  async isAuthenticated(): Promise<boolean> {
    return await Promise.resolve(true);
  }

  async loggedInUserName() {
    return await Promise.resolve('Muhammad Jahanzeb');
  }
}
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '@core/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class CanActivateLogin implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (await this.authService.isAuthenticated()) {
        this.router.navigate(['/admin']);
        return false;
      }

      return true;
    }
}
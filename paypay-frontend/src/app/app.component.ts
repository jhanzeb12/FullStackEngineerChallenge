import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '@core/auth/auth.service';
import { LoaderService } from '@shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PayPay Employee Feedback System';
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  showLoader = false;

  constructor(
    private authService: AuthService,
    private loaderService: LoaderService) {
      this.loaderService.showLoader$.subscribe({
        next: (resp) => {
          this.showLoader = resp;
        }
      });
    // subscribe to session expiry here and update isLoggedIn$
  }

  async ngOnInit() {
    if (await this.authService.isAuthenticated()) {
      this.isLoggedIn$.next(true);
    } else {
      this.isLoggedIn$.next(false);
      // call logout method if any
    }
  }
}

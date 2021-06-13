import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() set isLoggedIn(value: any) {
    if (value) {
      this.isAuthenticated = value;
      this.setUserName();
    }
  }

  public isAuthenticated = false;
  public loggedInUserName = '';

  constructor(private authService: AuthService) {
  }

  async ngOnInit() {
  }

  async setUserName() {
    this.loggedInUserName = await this.authService.loggedInUserName();
  }

  logout() {
  }
}

import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  @HostBinding('class') get Classes() { return 'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'; }
  constructor() { }

  ngOnInit(): void {
  }

}

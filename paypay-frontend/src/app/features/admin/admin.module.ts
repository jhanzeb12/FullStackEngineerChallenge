import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from '@shared/components/admin-sidebar/admin-sidebar.component';
import { EmployeesListComponent } from './manage-employees/employees-list/employees-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddEditEmployeeComponent } from './manage-employees/add-edit-employee/add-edit-employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeApi } from '@core/api/employee.api';

@NgModule({
  declarations: [
    IndexComponent,
    AdminSidebarComponent,
    EmployeesListComponent,
    AddEditEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ],
  providers: [
  ]
})
export class AdminModule { }

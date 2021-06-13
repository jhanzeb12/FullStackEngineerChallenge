import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { IEmployee } from 'src/app/models/IEmployee';
import { AlertService } from '@shared/services/alert.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  public employees: IEmployee[] = [];
  constructor(
    private employeeService: EmployeesService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.fetchAllEmployees();
  }

  fetchAllEmployees() {
    this.employeeService.getEmployeesList()
      .subscribe({
        next: (empList) => {
          this.employees = empList;
        }
      });
  }

  navigateToEmployee(ev: any) {
    this.router.navigateByUrl('/admin/new-employee');
  }

  editEmployee(empId: any) {
    this.router.navigateByUrl(`/admin/edit-employee/${empId}`);
  }

  deleteEmployee(empId: any) {
    const confirmResult = confirm('Are you sure want to delete');
    if (confirmResult) {
      this.employeeService.deleteEmployee(empId)
      .subscribe({
        next: (result) => {
          if (result) {
            this.alertService.successAlert('Deleted successfully.');
            this.employees = this.employees.filter((emp) => emp.Id !== empId);
          }
        }
      });
    }
  }
}

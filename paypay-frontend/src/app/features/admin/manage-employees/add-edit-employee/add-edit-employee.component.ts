import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { IEmployee } from 'src/app/models/IEmployee';
import { AlertService } from '@shared/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent {
  model: IEmployee = {};

  constructor(
    private employeeService: EmployeesService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.resetModel();
    this.route.params.subscribe(({ employeeId }) => {
      this.fetchEmployeeDetails(employeeId);
    });
  }

  fetchEmployeeDetails(employeeId: number) {
    this.employeeService.getEmployeeDetails(employeeId)
    .subscribe({
      next: (emp: IEmployee) => {
        this.model = emp;
      }
    });
  }

  resetModel() {
    this.model = {
      Id: -1,
      FirstName: '',
      LastName: '',
      Email: '',
      Designation: ''
    };
  }

  onSubmit() {
    this.employeeService.addUpdateEmployee(this.model)
      .subscribe({
        next: (resp) => {
          this.alertService.successAlert();
          this.router.navigateByUrl('/admin/employees-list');
        }
      });
  }

}

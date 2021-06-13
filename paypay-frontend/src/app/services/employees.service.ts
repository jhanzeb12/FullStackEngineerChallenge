import { Injectable } from '@angular/core';
import { IEmployee } from '../models/IEmployee';
import { EmployeeApi } from '@core/api/employee.api';
import { Observable } from 'rxjs';
import { HttpService } from '@shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employeeApi: EmployeeApi;
  constructor(
    private httpService: HttpService
  ) {
    this.employeeApi = new EmployeeApi(httpService);
  }

  getEmployeeDetails(employeeId: number): Observable<IEmployee> {
    return this.employeeApi.getEmployeeById(employeeId);
  }

  getEmployeesList(): Observable<IEmployee[]> {
    return this.employeeApi.fetchAllEmployees();
  }

  addUpdateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.employeeApi.addUpdateEmployee(employee);
  }

  deleteEmployee(employeeId: number): Observable<boolean> {
    return this.employeeApi.deleteEmployee(employeeId);
  }
}

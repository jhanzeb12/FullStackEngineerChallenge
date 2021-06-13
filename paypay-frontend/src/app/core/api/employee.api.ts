import { HttpService } from '@shared/services/http.service';
import { IEmployee } from 'src/app/models/IEmployee';
import { Observable } from 'rxjs';

export class EmployeeApi {
  private baseUrl = 'employees/';
  constructor(
    private http: HttpService
  ) { }

  addUpdateEmployee(employee: IEmployee): Observable<IEmployee> {
    debugger;
    if (employee.Id === -1) {
      delete employee.Id;
    }

    if (!employee.Id) {
      return this.http.post(`${this.baseUrl}create`, employee);
    }

    return this.http.post(`${this.baseUrl}update`, employee);
  }

  getEmployeeById(employeeId: number): Observable<IEmployee> {
    return this.http.get(`${this.baseUrl}${employeeId}`);
  }

  fetchAllEmployees(): Observable<IEmployee[]> {
    return this.http.get(`${this.baseUrl}all`);
  }

  deleteEmployee(employeeId: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}${employeeId}`);
  }
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '@features/admin/index/index.component';
import { EmployeesListComponent } from './manage-employees/employees-list/employees-list.component';
import { AddEditEmployeeComponent } from '@features/admin/manage-employees/add-edit-employee/add-edit-employee.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'employees-list',
        component: EmployeesListComponent
      },
      {
        path: 'new-employee',
        component: AddEditEmployeeComponent
      },
      {
        path: 'edit-employee/:employeeId',
        component: AddEditEmployeeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

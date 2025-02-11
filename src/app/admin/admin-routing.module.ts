import { AdminComponent } from './component/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: AdminComponent, pathMatch: 'full',
    children: [
      {
        path: 'employees',
        loadChildren: './employee/employee.module#EmployeeModule'
      },
      {
        path: 'departments',
        loadChildren: './department/department.module#DepartmentModule'
    },
    {
        path: 'designations',
        loadChildren: './designation/designation.module#DesignationModule'
    },
    {
      path: 'user',
      loadChildren: './user/user.module#UserModule'
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

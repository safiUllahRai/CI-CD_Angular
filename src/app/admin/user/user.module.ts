import { DesignModule } from 'src/app/design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutingModule } from './role-module.routing';
import { GridModule } from '@progress/kendo-angular-grid';
import { ModalRoleComponent } from './modal-role/modal-role.component';
import { ModalEmployeeComponent } from './modal-employee/modal-employee.component';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule
  ],
  declarations: [
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    UserDetailsComponent,
    ModalRoleComponent,
    ModalEmployeeComponent
  ],
  entryComponents: [ModalRoleComponent, ModalEmployeeComponent]
})
export class UserModule {}

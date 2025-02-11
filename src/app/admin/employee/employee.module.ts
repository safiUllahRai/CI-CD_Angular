import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeRoutingModule } from './employee-module.routing';
import { GridModule } from '@progress/kendo-angular-grid';
import { SelectManagerDialogComponent } from './select-manager-dialog/select-manager-dialog.component';
import { DesignModule } from 'src/app/design.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    GridModule,
    FormsModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeDetailsComponent,
    EmployeeEditComponent,
    SelectManagerDialogComponent,
  ],
  providers: [],
  entryComponents: [SelectManagerDialogComponent]
})
export class EmployeeModule {}

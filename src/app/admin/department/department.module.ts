import { DesignModule } from 'src/app/design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DepartmentRoutingModule, GridModule, DesignModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        DepartmentCreateComponent,
        DepartmentListComponent,
        DepartmentDetailsComponent,
        DepartmentEditComponent
    ]
})
export class DepartmentModule { }

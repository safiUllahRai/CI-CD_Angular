
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import {  Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SelectManagerDialogComponent } from '../select-manager-dialog/select-manager-dialog.component';
import { DataApiService } from 'src/app/data-api.service';

interface Employee {
  value: string;
  viewValue: string;
}
@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employeee: Employee[] = [
    {value: 'Permanent', viewValue: 'Permanent'},
    {value: 'Probation', viewValue: 'Probation'},
    {value: 'Internship', viewValue: 'Internship'},
    {value: 'Mentorship', viewValue: 'Mentorship'},
    {value: 'Time & Money', viewValue: 'Time & Money'},
    {value: 'Contractual Fixed term', viewValue: 'Contractual Fixed term'}
  ];
    PHONENUMBER = [/^[0-9]+$/];
    EmployeeForm: FormGroup;
    employee: any;

    // VIEW CONFIG
    public __PAGE_ROUTE: string = "/employees/";
    public __FORM_TITLE = "Edit Employee";
    public __FORM_SUB_TITLE = ""
    // VIEW CONFIG END
    employeeId: any;
    department//=[{viewValue: '1', value: 1}]
    allDistributions: any[] = [];
    designations: any[];
    selectedManagerId: number;

    constructor(
        private snackbar: MatSnackBar,
        private router: Router,
        private formBuilder: FormBuilder,
        public dialog: MatDialog,
        private route: ActivatedRoute,
        private dataApi: DataApiService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(res => this.employeeId = res['id']);
        this.EmployeeForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            fatherName: [''],
            personalNo:['',[Validators.required, Validators.maxLength(11)] ],
            qualification: [''],
            email: ['', [Validators.required, Validators.email]],
            cnic: [''],
            contactNo: [''],
            employeeType:['',[Validators.required]],
            manager: [{ value: '', disabled: true }, ],
            enabled: [''],
            departmentId: ['', [Validators.required]],
            designation: ['', [Validators.required]],
        });

        this.onChanges();
        this.getDepartmentsLookup();
        this.getDesignationLookup();
        this.initFormValues();
    }
    get user(): any {
      return JSON.parse(localStorage.getItem("Attendance-user"));
    }
    initFormValues(): void {
        this.dataApi.getSingleEmployee(this.employeeId).subscribe(emp => {
          var x = emp;
          //console.log("designation id", x.designationId)
          this.selectedManagerId = x.managerId;
          this.fc.firstName.setValue(x.firstName);
          this.fc.lastName.setValue(x.lastName);
          this.fc.fatherName.setValue(x.fatherName);
          this.fc.personalNo.setValue(x.personalNo);
          this.fc.qualification.setValue(x.qualification);
          this.fc.email.setValue(x.email);
          this.fc.cnic.setValue(x.cnic);
          this.fc.contactNo.setValue(x.contactNo);
          this.fc.manager.setValue(x.managerName);
          this.fc.enabled.setValue(x.enabled);
          this.fc.employeeType.setValue(x.employeeType);
          this.fc.departmentId.setValue(x.departmentId);
          this.fc.designation.setValue(x.designationId);
        });
    }

    submit() {

        if (this.EmployeeForm.invalid) {
           return;
        }

        const  postData = {
            id: this.employeeId,
            firstName: this.fc.firstName.value,
            lastName: this.fc.lastName.value,
            fatherName: this.fc.fatherName.value,
            qualification: this.fc.qualification.value,
            email: this.fc.email.value,
            cnic: this.fc.cnic.value,
            contactNo: this.fc.contactNo.value,
            personalNo:this.fc.personalNo.value,
            employeeType:this.fc.employeeType.value,
            managerId: this.selectedManagerId,
            enabled: this.fc.enabled.value,
            departmentId: this.fc.departmentId.value,
            designationId: this.fc.designation.value,
        };
        this.dataApi.updateEmployee(postData).subscribe(res => {
            {
                this.snackbar.open('Employee updated successfully.', null, {
                  duration: 10 * 1000
                });
                this.router.navigate([this.__PAGE_ROUTE]);
            }
        },        _err => {
          this.snackbar.open(_err.error.message, null, {
            duration: 10 * 1000
          });
        }
        );
    }

   DepartmentLookup: any = [];
    getDepartmentsLookup() {
        this.dataApi.getDepartmentLookup()
            .subscribe( res  => {
                    this.department = res;
                    for (var i = 0, len = this.department.length; i < len; i++) {
          const id = this.department[i].id;
        }
                }
            );
    }

    DesignationLookup: any = [];
    getDesignationLookup() {
        this.dataApi.getDesignationLookup()
            .subscribe(
                res => {
                    this.designations = res;
                    for (var i = 0, len = this.designations.length; i < len; i++){
                      const name = this.designations[i].name;
                    }
                }
            );
    }

    designationSelected(id: number) {
        const  selectedDesignation = this.designations.find(d => d.id == id)
    }

    get fc() { return this.EmployeeForm.controls; }
    selectManager() {
        const dialogRef = this.dialog.open(SelectManagerDialogComponent, {
            width: '800px'
        });

        dialogRef.afterClosed().subscribe(res => {
          if (res != null) {
            this.fc.manager.patchValue(res.fullName);
            this.selectedManagerId = res.id;
          }
        });
    }

    onChanges(): void {
        this.fc.designation.valueChanges.subscribe(id => {
            this.designationSelected(id);
        });

    }

}

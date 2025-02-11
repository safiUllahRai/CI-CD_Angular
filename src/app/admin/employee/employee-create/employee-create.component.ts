import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectManagerDialogComponent } from '../select-manager-dialog/select-manager-dialog.component';
import { DataApiService } from 'src/app/data-api.service';

interface Employee {
  value: string;
  viewValue: string;
}
@Component({
    selector: 'app-employee-create',
    templateUrl: './employee-create.component.html',
    styleUrls: ['./employee-create.component.css']
})

export class EmployeeCreateComponent implements OnInit {
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

    // VIEW CONFIG
    public __PAGE_ROUTE: string = '/employees/';
    public __FORM_TITLE = "New Employee";
    public __FORM_SUB_TITLE = ""
    // VIEW CONFIG END
    employee: any;
    department;
    designations: any[];
    selectedManagerId: number;



    constructor(
        private dataApi: DataApiService,
        private router: Router,
        private formBuilder: FormBuilder,
        private snackbar: MatSnackBar,
        public dialog: MatDialog,
    ) { }

    ngOnInit() {
        this.getDepartmentsLookup();
        this.getDesignationLookup();

        this.EmployeeForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            fatherName: [''],
            personalNo:['',[Validators.required, Validators.maxLength(11)] ],
            employeeType:['',[Validators.required]],
            qualification: [''],
            email: ['', [Validators.required, Validators.email]],
            cnic: [''],
            contactNo: [''],
            manager: [{ value: '', disabled: true } ],
            enabled: [true],
            totalLeaves: [''],
            departmentId: ['', [Validators.required]],
            designation: ['', [Validators.required]],
        });

        this.onChanges();
    }


    submit() {

        if (this.EmployeeForm.invalid) {
            return;
        }
        const model = {
            firstName: this.fc.firstName.value,
            lastName: this.fc.lastName.value,
            fatherName: this.fc.fatherName.value,
            qualification: this.fc.qualification.value,
            email: this.fc.email.value,
            cnic: this.fc.cnic.value,
            personalNo:this.fc.personalNo.value,
            contactNo: this.fc.contactNo.value,
            managerId: this.selectedManagerId,
            enabled: this.fc.enabled.value,
            employeeType:this.fc.employeeType.value,
            departmentId: this.fc.departmentId.value,
            designationId: this.fc.designation.value,
            totalLeaves: this.fc.totalLeaves.value
        };
console.log(model)
        this.dataApi.createNewEmployee(model).subscribe(() => {
          this.snackbar.open('Employee Created Successfully.', null, {
            duration: 10 * 1000
          });
          this.router.navigate([this.__PAGE_ROUTE]);
        },
        _err => {
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
            )
    }

    DesignationLookup: any = [];
    getDesignationLookup() {
        this.dataApi.getDesignationLookup()
            .subscribe(
                res => {
                    this.designations = [res];
                    for (var i = 0, len = this.designations.length; i < len; i++){
                      const name = this.designations[i].name;
                    }
                }
            );
    }

    designationSelected(id: number) {
        let selectedDesignation = this.designations.find(d => d.id == id);
    }

    get fc() { return this.EmployeeForm.controls; }
    selectManager() {
        const dialogRef = this.dialog.open(SelectManagerDialogComponent, {
            width: '500px'
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

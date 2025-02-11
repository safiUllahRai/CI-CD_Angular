import { DataApiService } from 'src/app/data-api.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {
    createDepartmentForm: FormGroup;
    // VIEW CONFIG
    public __PAGE_ROUTE: string = '/departments/';
    public __FORM_TITLE = "New Department";
    public __FORM_SUBTITLE = ""
    // VIEW CONFIG END

    constructor(
        private dataApi: DataApiService,
        private snackbar: MatSnackBar,
        private router: Router,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.createDepartmentForm = this.formBuilder.group({
            name : [ '', Validators.required ],
            enabled : [ true, Validators.required ],
        });
    }

    submit() {
        if (this.createDepartmentForm.invalid) {
          return;
        } else {
              this.dataApi.createNewDepartment(this.createDepartmentForm.value)
              .subscribe(() => {
                this.snackbar.open('Department Created Successfully.', null, {
                  duration: 10* 1000
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
    }

}

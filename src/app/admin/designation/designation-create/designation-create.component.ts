import { DataApiService } from 'src/app/data-api.service';
import { MatSnackBar } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


export interface HierarchyLevel {
    id: number;
    name: String;
}

@Component({
    selector: 'app-designation-create',
    templateUrl: './designation-create.component.html',
    styleUrls: ['./designation-create.component.css']
})
export class DesignationCreateComponent implements OnInit {
    designationForm: FormGroup;
    hierarchyLevels: HierarchyLevel[] = [];

    // VIEW CONFIG
    public __PAGE_ROUTE: string = '/designations/';
    public __FORM_TITLE = "New Designation";
    public __FORM_SUB_TITLE = ""
    // VIEW CONFIG END

    constructor(
        private snackbar: MatSnackBar,
        private dataApi: DataApiService,
        private router: Router,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.designationForm = this.formBuilder.group({
            name: ['', Validators.required],
            enabled: [true, Validators.required],
        });
    }

    get fc() { return this.designationForm.controls; }

    submit() {
        if (this.designationForm.invalid) {
            return;
        }

        const postObj = {
            name: this.fc.name.value,
            enabled: this.fc.enabled.value
        };

        this.dataApi.createNewDesignation(postObj)
        .subscribe(() => {
          this.snackbar.open('Designation Created Successfully.', null, {
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
}

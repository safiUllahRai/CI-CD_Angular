import { DataApiService } from 'src/app/data-api.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-designation-edit',
    templateUrl: './designation-edit.component.html',
    styleUrls: ['./designation-edit.component.css']
})
export class DesignationEditComponent implements OnInit {

    DesignationForm: FormGroup;
    // VIEW CONFIG
    public __PAGE_ROUTE: string = '/designations/';
    public __FORM_TITLE = "Edit Designation";
    public __FORM_SUB_TITLE = "";
    // VIEW CONFIG END

    private newUser: any = { enabled: true };

    constructor(
        private snackbar: MatSnackBar,
        private dataApi: DataApiService,
        private router: Router,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
    ) { }

    id;
    ngOnInit() {

      this.DesignationForm = this.formBuilder.group({
        id: [this.id],
        name: ['', Validators.required],
        enabled: [false, Validators.required],
    });
      this.route.params.subscribe(k => this.id = k['id']);
      this.dataApi.getSingleDesignation(this.id)
            .subscribe(
            department => {
              var x =department;
              this.DesignationForm.setValue({
                    id: x.id,
                    name: x.name,
                    enabled: x.enabled ? true : false
                });
            }
            );


    }


    submit() {
        if (!this.DesignationForm.valid) {
         return;
        } else {
            console.log(this.DesignationForm.value);
            this.dataApi.updateDesignation(this.DesignationForm.value)
                .subscribe(
                    res => {
                      {
                            this.snackbar.open('Designation has been updated', null, {
                              duration: 10 * 1000
                            });
                            // this.newBrand = { enabled: true };
                            this.router.navigate([this.__PAGE_ROUTE]);
                        }
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

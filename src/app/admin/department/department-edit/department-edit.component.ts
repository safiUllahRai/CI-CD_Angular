import { DataApiService } from "src/app/data-api.service";
import { MatSnackBar } from "@angular/material";
import { Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-department-edit",
  templateUrl: "./department-edit.component.html",
  styleUrls: ["./department-edit.component.css"]
})
export class DepartmentEditComponent implements OnInit {
  DepartmentForm: FormGroup;
  id: any;
  // VIEW CONFIG
  public __PAGE_ROUTE: string = "/departments/";
  public __FORM_TITLE = "Edit Department";
  public __FORM_SUB_TITLE = "";
  // VIEW CONFIG END

  constructor(
    private dataApi: DataApiService,
    private snackbar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(k => (this.id = k["id"]));
    this.dataApi.getSingleDepartment(this.id).subscribe(
      department => {
        var x =department;
        this.DepartmentForm.setValue({
          id: x.id,
          name: x.name,
          enabled: x.enabled ? true : false
        });
      },
      _err => {
        this.snackbar.open(_err.error.message, null, {
          duration: 10 * 1000
        });
      }
    );
    this.DepartmentForm = this.formBuilder.group({
      id: [this.id],
      name: ["", Validators.required],
      enabled: [false, Validators.required]
    });
  }

  submit() {
    if (this.DepartmentForm.invalid) {
      this.snackbar.open("Fix all validation issues", null, {
        duration: 10 * 1000
      });
    } else {
      this.dataApi.updateDepartment(this.DepartmentForm.value).subscribe(
        res => {
          {
            this.snackbar.open("Department Updated", null, {
              duration: 10 * 1000
            });
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

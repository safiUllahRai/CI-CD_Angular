import { DataApiService } from './../data-api.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"]
})
export class ChangePasswordComponent implements OnInit {
  changePassword: FormGroup;
  userObj: any;
  get user(): any {
    return JSON.parse(localStorage.getItem('Attendance-user'));
  }

  constructor(
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private dataApi: DataApiService,
  ) {

  }

  ngOnInit() {

    this.changePassword = this.formBuilder.group({
      newPassword: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]]
    });
  }
  get fc() {
    return this.changePassword.controls;
  }

  submit() {
   
    if (this.changePassword.invalid) {
      return;
    }
    if (this.fc.newPassword.value != this.fc.confirmPassword.value){
  this.snackbar.open('Password not matched', null, {
    duration: 10 * 1000
  });
  return;
}
this.userObj = JSON.parse(localStorage.getItem('Attendance-user'));
//console.log("userobj", this.userObj)
    const model = {
      userID:this.userObj.refEmployeeId,
      newPassword: this.fc.confirmPassword.value
    };
    this.dataApi.changePassword(model).subscribe(
      res => {
        if (res.success){
          this.snackbar.open("Your password has been changed. Kindly log in again with new credentials", null, {
            duration: 10 * 1000
          });
          localStorage.clear();
        }

       window.location.reload();
      },

      _err => {
        this.snackbar.open(_err.error.message, null, {
          duration: 10 * 1000
        });
      }
    );
  }
}

import { Router } from '@angular/router';
import { DataApiService } from './../data-api.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from "@angular/material";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  changePassword: FormGroup;
  userObj: any;
  id: any;
  // get user(): any {
  //   return JSON.parse(localStorage.getItem('Attendance-user'));
  // }

  constructor(
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private dataApi: DataApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
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
// this.userObj = JSON.parse(localStorage.getItem('Attendance-user'));
//console.log("userobj", this.userObj)
    const model = {
      userID:this.id,
      newPassword: this.fc.confirmPassword.value
    };
    this.dataApi.changePasswordWithId(model).subscribe(
      res => {
        if (res.success){
          this.snackbar.open("Your password has been changed. Kindly log in again with new credentials", null, {
            duration: 10 * 1000
          });
          
        }

        this.router.navigate(['/login']);
      },

      _err => {
        this.snackbar.open(_err.error.message, null, {
          duration: 10 * 1000
        });
      }
    );
  }
}

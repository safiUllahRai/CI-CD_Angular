import { DataApiService } from 'src/app/data-api.service';
import { MatSnackBar } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { forkJoin } from "rxjs";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalEmployeeComponent } from "../modal-employee/modal-employee.component";
import { MatDialog } from "@angular/material";
import { Component, OnInit } from "@angular/core";

declare var _: any;

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"]
})
export class UserEditComponent implements OnInit {
  __PAGE_TITLE = "Edit User";
  __PAGE_ROUTE = "/user/";
  roleID: any;
  employee: any;
  newUSerEmail: any;
  constructor(
    private dataApi: DataApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private Router: Router,
    private dialog: MatDialog,
  ) {}

  UserForm: FormGroup;

  ngOnInit() {
    this.route.params.subscribe(k => (this.id = k["id"]));
    this.setFormGroup();
    forkJoin([
      this.dataApi.getSingleUser(this.id),
      this.dataApi.getRolesLookup()
    ]).subscribe(
      results => {
        console.log("results", results)
        this.getUser(results[0]);
      },
      _err => {
        this.snackbar.open(_err.error.message, null, {
          duration: 10 * 1000
        });
      }
    );
  }

  id: string;
  Details: any;
  user_to_edit;
  _user: any = {};
  getUser(_user) {
    var x = _user;
    this.roleID =_user.role_id  
    console.log("roleid", this.roleID)
    console.log("user", _user)
    this.Details = {
      "Name": x.name,
      "Username": x.username,
      "Email": x.email
    };
    this._user = x;
    this.employee = x
    this.setFormGroup();
  }

  setFormGroup(){
    this.UserForm = this.formBuilder.group({
        id: [ this._user.id ],
        enabled: [ this._user.enabled ],
        accountNonLocked: [ this._user.accountLocked ],
        credentialsNonExpired: [ this._user.credentialsExpired ],
    })
}

onSelectEmployee() {
  let dialogRef = this.dialog.open(ModalEmployeeComponent, {
    width: "800px"
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result != null) {
      this.employee = result;
    }
  });
 
}
get fc() { return this.UserForm.controls; }
submit(){
  var x =  JSON.parse(localStorage.getItem('Attendance-user'));
  if(this.employee.email != this._user.email){
    this.newUSerEmail = this.employee.email
  } else {
    this.newUSerEmail= null;
  }
 let postBody = {
  accountLocked: this.fc.accountNonLocked.value,
  credentialsExpired: this.fc.credentialsNonExpired.value,
  enabled: this.fc.enabled.value,
  id:this.fc.id.value,
  userEmail: this._user.email,
  lastModifiedBy:x.email,
  newUserEmail: this.newUSerEmail,
  roles: [
    {
      description: "hardcorded",
      enabled:this._user.enabled,
      id: this.roleID,
      name:"hardcoded"
    }
  ]
 }

  this.dataApi.updateUser(postBody)
      .subscribe(
          k => {
              this.snackbar.open('User Updated', null , {
                duration: 10 * 1000
              });
              this.Router.navigate([this.__PAGE_ROUTE]);
          },       _err => {
            this.snackbar.open(_err.error.message, null, {
              duration: 10 * 1000
            });
          }
      )

}
}

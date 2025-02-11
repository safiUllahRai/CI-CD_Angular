import { DataApiService } from 'src/app/data-api.service';
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ModalEmployeeComponent } from "../modal-employee/modal-employee.component";
import { ModalRoleComponent } from "../modal-role/modal-role.component";
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material';


@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html"
})
export class UserCreateComponent implements OnInit {
  employee: any;
  roles: any;
  private __PAGE_ROUTE: string = "/user/";

  constructor(
    private dialog: MatDialog,
    private dataApi: DataApiService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {}
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
  onSelectRole() {
    let dialogRef = this.dialog.open(ModalRoleComponent, {
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.roles = result;
      }
    });
  }
  onSubmit() {
     const getfromLocal = JSON.parse(localStorage.getItem('Attendance-user'));
     //console.log("from local ", getfromLocal)

    if (this.employee && this.roles) {
      const  userPostData = {
        createdBy: getfromLocal.email,
        username: this.employee.email,
        employeeId: this.employee["id"],
        roleIds: this.roles.map(r => r["id"])
      };
      this.dataApi.createNewUser(userPostData).subscribe(() => {
        this.snackbar.open('User Created Successfully.', null, {
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
    } else {
      var errors = [];
      if (!this.employee) errors.push("Select Employee");
      if (!this.roles)  errors.push('Select Role');
      this.snackbar.open(
        `Please insert data in all fields,
    		` + errors.join(" & ") , null, {
          duration: 10 * 1000
        }
      );
    }
  }
}

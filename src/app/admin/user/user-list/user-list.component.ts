import { DataApiService } from 'src/app/data-api.service';
import { MatSnackBar } from '@angular/material';
import { Component, OnInit, AfterViewChecked } from "@angular/core";
import {
  GridDataResult,
  DataStateChangeEvent
} from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";

// declare var userDataSource: User[];

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  public gridData: GridDataResult;
  public state: State = {
    skip: 0,
    take: 20,
    filter: {
      logic: "and",
      filters: []
    }
  };
  users = [];
  user: any;
  enabled: number;
  constructor(private dataApi: DataApiService, private snackbar: MatSnackBar) {}

  ngAfterViewChecked() {
    const element = Array.from(
      document.querySelectorAll(".k-grid-header .k-grid-filter")
    );
    const element2 = Array.from(
      document.querySelectorAll(".k-grid-header .k-link")
    );
    element.forEach(el => {
      (el as HTMLElement).style.right = "0px";
      (el as HTMLElement).style.left = "0px";
    });
    element2.forEach(el => {
      (el as HTMLElement).style.marginLeft = "1px";
    });
  }
  // VIEW CONFIG
  public __PAGE_TITLE: string = "Users";
  public __PAGE_ROUTE: string = "/user/";

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.users, this.state);
  }
  isEnable(body){
    if(body.enabled === false){
      this.enabled = 0
    }
    if(body.enabled === true){
      this.enabled = 1
    }
    let postBody = {
      lastModifiedBy:this.user.username,
      enabled: this.enabled
    }

    this.dataApi.statusUpdate(body.id, postBody).subscribe(
      res => {
        this.snackbar.open(res.message, null , {
          duration: 10 * 1000
        });
      },  _err => {
        this.snackbar.open(_err.error.message, null, {
          duration: 10 * 1000
        });
      })
  }
  ngOnInit() {
    this.user =  JSON.parse(localStorage.getItem('Attendance-user'));
   

    this.dataApi.getUserList().subscribe(
      res => {
        this.users = res;
       // console.log("users data to check status", this.users)
        this.gridData = process(this.users, this.state);
      },
      _err => {
        this.snackbar.open(_err.error.message, null, {
          duration: 10 * 1000
        });
      }
    );

  }
}

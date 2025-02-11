import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataApiService } from 'src/app/data-api.service';
import { Router } from '@angular/router';
import {
  GridDataResult,
  DataStateChangeEvent
} from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";

@Component({
  selector: 'app-manager-employees',
  templateUrl: './manager-employees.component.html',
  styleUrls: ['./manager-employees.component.scss']
})
export class ManagerEmployeesComponent implements OnInit {

  stopSpiner: boolean;
  public gridData: GridDataResult;
  public state: State = {
    skip: 0,
    take: 20
  };
  employees = [];
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.employees, this.state);
  }

  constructor(private router: Router,
    private snackbar: MatSnackBar,
    private dataApi: DataApiService    ) {

      const userObj = JSON.parse(localStorage.getItem('Attendance-user'));
    this.dataApi.getManagerEmployees(userObj.refEmployeeId).subscribe(
      //  this.dataApi.getManagerEmployees(100).subscribe(
          res => {
            this.stopSpiner = true;
            this.employees = res;
            
            this.gridData = process(this.employees, this.state);
          },
          _err => {
            this.stopSpiner = true;
            this.snackbar.open(_err.error.message, null, {
              duration: 10 * 1000
            });
          }
        )
     }
  
    getStatusText(status) {
      if (status === 1) {
        return 'Pending';
      } else if (status === 2) {
        return 'Approved';
      } else if (status === 3) {
        return 'Rejected';
      } else if (status === 4) {
        return 'Withdrawn';
      }
      
      // Default text for other cases
      return '';
    }

    getStatusText2(status) {
      if (status === 1) {
        return 'Leave Request';
      } else if (status === 2) {
        return 'Remote Request';
      }
      
      // Default text for other cases
      return '';
    }


  get user(): any {
    return JSON.parse(localStorage.getItem('Attendance-user'));
  };
  ngOnInit() {

  }

}

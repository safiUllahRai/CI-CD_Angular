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
  selector: 'app-team-logs',
  templateUrl: './team-logs.component.html',
  styleUrls: ['./team-logs.component.scss']
})
export class TeamLogsComponent implements OnInit {

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
   this.dataApi.getManagerTeamLogs(userObj.refEmployeeId).subscribe(
      // this.dataApi.getManagerTeamLogs(100).subscribe(
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

  ngOnInit() {
  }

}

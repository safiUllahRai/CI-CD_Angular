import { MatSnackBar } from '@angular/material';
import { DataApiService } from './../data-api.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from "./../api.service";
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

export interface AttendanceModel {
  dated: any;
  checkIn: any;
  checkOut: any;
  cannotWithdraw: boolean;
}

@Component({
  selector: 'app-attendance-log',
  templateUrl: './attendance-log.component.html',
  styleUrls: ['./attendance-log.component.scss']
})
export class AttendanceLogComponent implements OnInit {

  managerEmployeeList: [] = [  ];
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['date', 'checkIn', 'checkOut','status','options'];

  data: any[] = [  ];

  logs: AttendanceModel[] = [];
  stopSpiner: boolean;
  
  constructor(private dataApi: DataApiService, private snackbar: MatSnackBar, private API: ApiService) {   this.dataApi.getAttendanceLog(this.user.email).subscribe(res => {
    this.stopSpiner = true;
    this.logs = res;

    this.managerEmployeeList = res
    const dtta =  new MatTableDataSource(this.managerEmployeeList)

    this.dataSource = dtta.filteredData as any;

    console.log("logs to check", this.logs)
    if(this.logs.length == 0){
      this.snackbar.open('No Logs Found', null, {
        duration: 10 * 1000
      });
    }
    if (res.status == 200) {
      this.logs = res;
      for (var i = 0, len = this.logs.length; i < len; i++) {
      }
    }
    _err => {
      this.snackbar.open(_err.error.message, null, {
        duration: 10 * 1000
      });
    }
  });}

  get user(): any {
    return JSON.parse(localStorage.getItem('Attendance-user'));
  }


  ngOnInit() {

 
  }
  shouldShowButton(userDate: string): boolean {
    const currentDate = new Date();
    const next14Days = new Date(userDate);
    next14Days.setDate(next14Days.getDate() + 11);
    console.log("next 14 days", next14Days);
    return currentDate < next14Days;
  }
  fetchData(data){
this.API.set("dataFromLogs", data)
  }
}

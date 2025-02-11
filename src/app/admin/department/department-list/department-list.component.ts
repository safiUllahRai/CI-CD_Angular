import { MatSnackBar } from '@angular/material';
import { DataApiService } from 'src/app/data-api.service';
import { Component, OnInit } from '@angular/core';
import {
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public departments = [];
  public gridData: GridDataResult;
  public state: State = {
    skip: 0,
    take: 20
  };
  constructor(private dataApi: DataApiService, private snackbar: MatSnackBar) {}
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.departments, this.state);
  }
  public __PAGE_TITLE: string = 'Departments';
  public __PAGE_ROUTE: string = '/departments/';
  ngOnInit() {
    this.dataApi.getDepartments().subscribe(
      res => {
        this.departments = res;
        this.gridData = process(this.departments, this.state);
      },
      _err => {
        this.snackbar.open(_err.error.message, null, {
          duration: 10 * 1000
        });
      }
    );
  }
}

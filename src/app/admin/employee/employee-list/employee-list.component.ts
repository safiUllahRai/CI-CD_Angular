import { MatSnackBar } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import {
  GridDataResult,
  DataStateChangeEvent
} from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";
import { DataApiService } from 'src/app/data-api.service';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  stopSpiner: boolean;
  public gridData: GridDataResult;
  public state: State = {
    skip: 0,
    take: 20
  };
  employees = [];
  constructor(private dataApi: DataApiService, private snackbar: MatSnackBar) {}

  // VIEW CONFIG
  public __PAGE_TITLE: string = "Employees";
  public __PAGE_ROUTE: string = "/employees/";


  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.employees, this.state);
  }

  ngOnInit() {
    this.dataApi.getEmployeeList().subscribe(
      res => {
        this.stopSpiner = true;
        this.employees = res;
        
        this.gridData = process(this.employees, this.state);
      },
      _err => {
        this.snackbar.open(_err.error.message, null, {
          duration: 10 * 1000
        });
      }
    );
  }
}

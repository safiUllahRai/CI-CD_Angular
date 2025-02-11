import { DataApiService } from 'src/app/data-api.service';
import { MatSnackBar } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import {
  GridDataResult,
  DataStateChangeEvent
} from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";

@Component({
  selector: "app-designation-list",
  templateUrl: "./designation-list.component.html",
  styleUrls: ["./designation-list.component.css"]
})
export class DesignationListComponent implements OnInit {
  public desginations;
  public gridData: GridDataResult;
  public state: State = {
    skip: 0,
    take: 20
  };
  constructor(private dataApi: DataApiService, private snackbar: MatSnackBar) {}

  // VIEW CONFIG
  public __PAGE_TITLE: string = "Designations";
  public __PAGE_ROUTE: string = "/designations/";
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.desginations, this.state);
  }
  ngOnInit() {
    this.dataApi.getDesignations().subscribe(
      res => {
        console.log("get designation call hua")
        this.desginations = res;
        this.gridData = process(this.desginations, this.state);
      },
      _err => {
        this.snackbar.open(_err.error.message, null, {
          duration: 10 * 1000
        });
      }
    );
  }
}

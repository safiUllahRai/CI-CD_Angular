import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { GridDataResult, SelectableSettings, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DataApiService } from 'src/app/data-api.service';


@Component({
  selector: 'app-select-manager-dialog',
  templateUrl: './select-manager-dialog.component.html',
  styleUrls: ['./select-manager-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectManagerDialogComponent implements OnInit {
  [x: string]: any;
  employees: any[];
  public gridData: GridDataResult;
  public selectableSettings: SelectableSettings;
  public selectedEmployeeKey: number[]= [];
  public message: String;

  public state: State = {
    skip: 0,
    take: 20
  };

  constructor(private dataApi: DataApiService,
    public dialogRef: MatDialogRef<SelectManagerDialogComponent>
   ) {
    this.setSelectableSettings();
    }
    public setSelectableSettings(): void {
      this.selectableSettings = {
        mode: "single",
        checkboxOnly: false
      };
    }

  ngOnInit() {
    this.dataApi.getEmployeeList().subscribe(res => {
      this.employees = res;
      this.gridData = process(this.employees, this.state);
    })
  }

  public dataStateChange(state: DataStateChangeEvent): void {
		this.state = state;
		this.gridData = process(this.employees, this.state);
  }

  selectClicked(){
    if(this.selectedEmployeeKey.length < 1) {
    return;
    }
    const  employee  = this.employees.find(x => x.id === this.selectedEmployeeKey[0]);
    this.dialogRef.close(employee);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

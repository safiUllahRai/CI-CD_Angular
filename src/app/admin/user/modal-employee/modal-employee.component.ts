import { DataApiService } from 'src/app/data-api.service';
import { Component, OnInit, ViewEncapsulation, Inject } from "@angular/core";
import {MatSnackBar} from '@angular/material';
import {
  GridDataResult,
  DataStateChangeEvent,
  SelectableSettings
} from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-modal-employee",
  templateUrl: "./modal-employee.component.html",
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ModalEmployeeComponent implements OnInit {
  public gridData: GridDataResult;
  public state: State = {
    skip: 0,
    take: 5
  };
  public selectableSettings: SelectableSettings;
  employees = [];
  public mySelection: number[] = [];
  public customOperators = {
    string: {
      contains: (value: string, filter: string) =>
        value.toLowerCase().includes(filter.toLowerCase())
    }
  };
  constructor(
    private dataApi: DataApiService,
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<ModalEmployeeComponent>
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
    this.dataApi.getEmployeeList().subscribe(
      res => {
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
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.employees, this.state);
  }
  onSubmit() {
    if (this.mySelection.length < 1) {
      return;
    }

    const employee = this.employees.find(x => x.id === this.mySelection[0]);
    this.dialogRef.close(employee);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

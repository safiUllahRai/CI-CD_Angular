import { DataApiService } from 'src/app/data-api.service';
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {MatSnackBar} from '@angular/material';
import {
  GridDataResult,
  DataStateChangeEvent,
  SelectableSettings
} from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-modal-role",
  templateUrl: "./modal-role.component.html",
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ModalRoleComponent implements OnInit {
  public gridData: GridDataResult;
  public state: State = {
    skip: 0,
    take: 5
  };
  public selectableSettings: SelectableSettings;
  roles = [];
  public mySelection: number[] = [];
  constructor(
    private dataApi: DataApiService,
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<ModalRoleComponent>
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
    this.dataApi.getRoleList().subscribe(
      res => {
        this.roles = res;
        this.gridData = process(this.roles, this.state);
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
    this.gridData = process(this.roles, this.state);
  }
  onSubmit() {
    if (this.mySelection.length < 1) {
      return;
    }
    const roles = this.roles.filter((item, index) => {
      const find = this.mySelection.find(x => x === item.id);
      return find ? true : false;
    });
    this.dialogRef.close(roles);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

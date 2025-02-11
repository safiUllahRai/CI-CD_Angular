import { DataApiService } from 'src/app/data-api.service';
import { MatSnackBar } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import {
  GridDataResult,
  DataStateChangeEvent
} from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})

export class HolidaysComponent implements OnInit {
  public desginations;
  public gridData: GridDataResult;
  public state: State = {
    skip: 0,
    take: 20
  };

  constructor(private dataApi: DataApiService,
    private snackbar: MatSnackBar
    
    ) { }

    // VIEW CONFIG

    public dataStateChange(state: DataStateChangeEvent): void {
      this.state = state;
      this.gridData = process(this.desginations, this.state);
    }

  ngOnInit() {
    this.dataApi.getHoliDays().subscribe(
      res => {
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

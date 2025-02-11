import { DataApiService } from 'src/app/data-api.service';
import { MatSnackBar } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import {
  GridDataResult,
  DataStateChangeEvent
} from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";

@Component({
  selector: 'app-get-manager-emails',
  templateUrl: './get-manager-emails.component.html',
  styleUrls: ['./get-manager-emails.component.scss']
})
export class GetManagerEmailsComponent implements OnInit {
  public desginations;
  public gridData: GridDataResult;
  public state: State = {
    skip: 0,
    take: 20
  };

  constructor(private dataApi: DataApiService,
    private snackbar: MatSnackBar) { }

    public dataStateChange(state: DataStateChangeEvent): void {
      this.state = state;
      this.gridData = process(this.desginations, this.state);
    }
    ngOnInit() {
      this.dataApi.getManagerEmails().subscribe(
        res => {
          this.desginations = res;
          this.desginations = res;
          console.log("MAnager list", this.desginations)
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

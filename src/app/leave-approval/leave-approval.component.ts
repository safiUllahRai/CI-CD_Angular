import { LeaveRemarksComponent } from './../leave-remarks/leave-remarks.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DataApiService } from './../data-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GridDataResult,
  DataStateChangeEvent
} from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";


export interface ApprovalStatusModel {
  id: number;
  statusText: string;

}

@Component({
  selector: 'app-leave-approval',
  templateUrl: './leave-approval.component.html',
  styleUrls: ['./leave-approval.component.scss']
})
export class LeaveApprovalComponent implements OnInit {

  

  approvalStatuses: ApprovalStatusModel[] = [
    {
      id: 1,
      statusText: 'Pending'
    },
    {
      id: 2,
      statusText: 'Approved'
    },
    {
      id: 3,
      statusText: 'Rejected'
    },
    {
      id: 4,
      statusText: 'Withdrawn'
    }
  ];

  stopSpinner: boolean;
  public gridData: GridDataResult;
  public state: State = {
    skip: 0,
    take: 100
  };
  employees = [];
  loggedInUser: any;
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.employees, this.state);
  }

  constructor(private dataApi: DataApiService, private snackbar: MatSnackBar, public dialog: MatDialog, private router: Router) {
    this.loggedInUser = JSON.parse(localStorage.getItem('Attendance-user'));
  
    if (this.loggedInUser.roles[0] === "Admin") {
      this.dataApi.getAdminApprovals().subscribe(res => {
        //  this.dataApi.getApprovals(100).subscribe(res => {
        this.stopSpinner = true;
        this.employees = res;
        this.gridData = process(this.employees, this.state);
      });
    } else {
      this.dataApi.getApprovals(this.user.refEmployeeId).subscribe(res => {
        //  this.dataApi.getApprovals(100).subscribe(res => {
        this.stopSpinner = true;
        this.employees = res;
        this.gridData = process(this.employees, this.state);
      });
    }

   }

  get user(): any {
    return JSON.parse(localStorage.getItem('Attendance-user'));
  }

  ngOnInit() {


  }
  getApprovalStatusText(id: any) {
    return this.approvalStatuses.find(a => a.id == id).statusText;
  }

  approvalStatus(id: any) {
    var leaveRemarksDialog = this.dialog.open(LeaveRemarksComponent, {
      role: 'dialog',
      minWidth: 250,
    });

    leaveRemarksDialog.afterClosed().subscribe(res => {
      if (res == null) {
        return;
      }
      const model = {
        approvalStatus: 2,
        approvalRemarks: res.remarks,
      };
      this.dataApi.updateApprovalStatus(id, model).subscribe(
        () => {
       //   var request = this.leaveApproval.find(i => i.id == id);
          this.snackbar.open('Request has been updated', null, {
            duration: 10 * 1000
          });
          this.router
            .navigateByUrl("/", { skipLocationChange: true })
            .then(() => {
              this.router.navigate(['/leaveapproval']);
            });
        },
        _err => {
          this.snackbar.open(_err.error.message, null, {
            duration: 10 * 1000
          });
        }
      );
    });







    //this.router.navigate(['/leaveapproval']);

  }

  approvalStatusReject(id: any) {

    var leaveRemarksDialog = this.dialog.open(LeaveRemarksComponent, {
      role: 'dialog',
      minWidth: 250,
    });
    leaveRemarksDialog.afterClosed().subscribe(res => {
      if (res == null) {
        return;
      }
      const model = {
        approvalStatus: 3,
        approvalRemarks: res.remarks,
      };
      this.dataApi.updateApprovalStatus(id, model).subscribe(
        () => {
         // const request = this.leaveApproval.find(i => i.id == id);
          this.snackbar.open('Request has been updated', null, {
            duration: 10 * 1000
          });
          this.router
            .navigateByUrl("/", { skipLocationChange: true })
            .then(() => {
              this.router.navigate(['/leaveapproval']);
            });
          //location.reload();
        },
        _err => {
          this.snackbar.open(_err.error.message, null, {
            duration: 10 * 1000
          });
        }
      );
    });

  }
}


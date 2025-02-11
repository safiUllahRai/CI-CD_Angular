import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataApiService } from '../data-api.service';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';



export interface RequestDetailModel  {
  id: number;
  requestType: number;
  startDate: Date;
  endDate: Date;
  days: number;
  approvalStatus: number;
  approvalStatusText: string;
  submissionDate: Date;
  cannotWithdraw: boolean;
  status: any;
  totalLeaves: any;
  reason: any

}


export interface ApprovalStatusModel {
  id: number;
  statusText: string;

}


@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.scss']
})
export class AllRequestsComponent implements OnInit {

  data: any[]; // Array to hold the API data
  filteredData: any[]; // Array to hold the filtered data
  selectedFilter: string = 'all'; // Default filter value

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

  allRequests: RequestDetailModel[] = [];
  email: string;
stopLoader: boolean;
  summm: any;
  allToalLeaves: any[];
  constructor(
              private dataApi: DataApiService,
              private snackbar: MatSnackBar,
   ) {  

    }
   get user(): any {
    return JSON.parse(localStorage.getItem("Attendance-user"));
  }
  onFilterChange() {
    // console.log("onfilterchange", this.allRequests)
    // if (this.selectedFilter === 'all') {
    //   this.allRequests = this.data;
    // } else {
    //   this.allRequests = this.allRequests.filter(item => item.status === this.selectedFilter);
    // }
    this.allRequests = this.filteredData.filter(item => {
      if (this.selectedFilter === 'all') {
        return true; // Include all items when the filter is set to "All"
      } else {
        console.log("item status", item.status , "slecte file", this.selectedFilter)
        return item.status === this.selectedFilter; // Only include items with matching status
      }
      
    });
  }
  ngOnInit() {

      this.dataApi.getAllRequests(this.user.email).subscribe(res  => {
        this.stopLoader = true;

        this.allRequests = res;
        //this.allRequests = res;
      let   totall = [];
        if(this.allRequests.length == 0){
          this.snackbar.open('History Not Found', null, {
            duration: 10 * 1000
          });
        }
        this.allRequests.forEach(r => {
          if(r.approvalStatus === 1){
            r.status = "pending";
          }


           if (r.requestType === 1) {
            if ((r.approvalStatus === 1 || r.approvalStatus === 2) && r.reason !== "Half Day") {
              totall.push(r.totalLeaves);
            }
          
            if (r.approvalStatus === 1 && r.reason === "Half Day") {
              totall.push(0.5);
            }
          
            if (r.approvalStatus === 2 && r.reason === "Half Day") {
              totall.push(0.5);
            }
          }
          

          
          if(r.approvalStatus === 2){
            r.status = "approved";
           
          }
          if(r.approvalStatus === 3){
            r.status = "rejected"
          }
          if(r.approvalStatus === 4){
            r.status = "withdrawn"
          }

console.log("total leaves", totall)

this.allToalLeaves = totall;
this.summm =    this.allToalLeaves.reduce((total, item) => total + item, 0);
          const startDate = moment(r.startDate);
        //  console.log("starttt date", startDate)
          const endDate = moment(r.endDate);
          r.days = endDate.diff(startDate, 'days') + 1;
   
          const submissionDate = moment(r.submissionDate);
         // console.log("submission date", submissionDate)
          const  currentDate = moment(new Date());
          var withdrawlAllowedTill;

          if (r.requestType === 1) {
             withdrawlAllowedTill = endDate.add(2, 'days');
              // tslint:disable-next-line: align
             if (endDate < currentDate) {
              withdrawlAllowedTill = submissionDate.add(2, 'days');
             }
          } else if (r.requestType === 2) {
            withdrawlAllowedTill = startDate.add(1, 'days');
          }

          if (withdrawlAllowedTill.isBefore(currentDate)) {
            r.cannotWithdraw = true;
          } else {
            r.cannotWithdraw = false;
          }
        });
        
// console.log("total leavessss", this.allToalLeaves)
     //   console.log("alldmksm", this.allRequests)
        this.data = this.allRequests;
        this.filteredData = this.allRequests;
       // console.log("filtered", this.filteredData)
      });
  }


  getApprovalStatusText(id: number) {
    return this.approvalStatuses.find(a => a.id == id).statusText;
  }

  withdrawRequest(id: number) {
    this.dataApi.withdrawRequest(id).subscribe(
      () => {
        var request = this.allRequests.find(r => r.id == id);
        request.approvalStatus = 4;
        request.approvalStatusText = this.getApprovalStatusText(4);


        this.snackbar.open('You request has been withdrawn successfully', null, {
          duration: 10 * 1000
        });
       // console.log(request);
      },
      _err => {
        this.snackbar.open(_err.error.message, null, {
          duration: 10 * 1000
        });
      }
    );
  }
}

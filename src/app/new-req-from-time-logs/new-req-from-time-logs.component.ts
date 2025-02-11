import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataApiService } from '../data-api.service';
import { MatSnackBar } from '@angular/material';
import * as moment from 'moment';

export interface LeaveRequestTypeModel {
  requestType: string;
  requestTypeId: number;
  reasons: string[];
}


@Component({
  selector: 'app-new-req-from-time-logs',
  templateUrl: './new-req-from-time-logs.component.html',
  styleUrls: ['./new-req-from-time-logs.component.scss']
})
export class NewReqFromTimeLogsComponent implements OnInit {

  private LEAVE_TYPE_KEY = 'Leave Request';
  private REMOTE_TYPE_KEY = 'Remote Request';
  requestForm: FormGroup;
  requestTypes: LeaveRequestTypeModel[] = [];
  applicableReasons: string[] = [];
  startDateMinDate: Date;
  currentDate: Date;
  minDate: Date;
  productManager: any;
  name: string;
  email: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataApi: DataApiService,
    private snackbar: MatSnackBar,
  ) {
    this.currentDate = new Date(); // Get the current date
    this.minDate = new Date(); // Set the minimum date initially to the current date
    this.minDate.setDate(this.currentDate.getDate() - 10); // Subtract 10 days from the current date
     this.dataApi.getManagerList().subscribe( res  => {
 this.productManager= res;
}
     )}
  
  get user(): any {
    return JSON.parse(localStorage.getItem('Attendance-user'));
  }

  ngOnInit() {

    const dateCheck = JSON.parse(localStorage.getItem('Attendance-dataFromLogs'));
    console.log("dated",dateCheck.dated)

    const userObj = JSON.parse(localStorage.getItem('Attendance-user'));


    this.name = userObj.name;
    this.email = userObj.email;


    this.requestForm = this.fb.group({
      type: ['', Validators.required],
      reason: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      managerEmail: ['',[]],
      endDate: [new Date(), Validators.required],
      comments: ['', Validators.required]
    });


    if(dateCheck.dated){
      this.fc.startDate.setValue(dateCheck.dated)
     }

    this.requestTypes = [
      {
        requestType: 'Leave Request',
        requestTypeId: 1,
        reasons: [
          'Annual Leave',
          'Regular Leave',
          'Sick Leave',
          'Half Day',
          'Urgent Leave',
          'Exam/Training Leave',
        ]
      },
      {
        requestType: 'Remote Request',
        requestTypeId: 2,
        reasons: [
          'Late Night Work',
          'Internet Issue',
          'Security Issue',
          'Others'
        ]
      }
    ];

    this.onChanges();
  }

  onChanges() {
    this.requestForm.get('type').valueChanges.subscribe(val => {
      if (val == 1) {
        this.startDateMinDate = moment().subtract(15, 'days').toDate();
      } else if (val == 2) {
        this.startDateMinDate = new Date();
      }
    });

    this.requestForm.get('startDate').valueChanges.subscribe(val => {
      this.requestForm.get('endDate').setValue(val);
    });
  }

  get fc() {
    return this.requestForm.controls;
  }

  onSubmit() {
    if (this.requestForm.invalid) {
      console.log(this.fc.startDate.value);
      console.log(this.fc.endDate.value);

      Object.keys(this.requestForm.controls).forEach(key => {

        const controlErrors: ValidationErrors = this.requestForm.get(key).errors;
        if (controlErrors != null) {
              Object.keys(controlErrors).forEach(keyError => {
                console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
              });
            }
          });

      return;
    }
    const userObj = JSON.parse(localStorage.getItem('Attendance-user'));
    const postBody = {
      name: userObj.name,
      email: userObj.email,
      requestType: this.fc.type.value,
      allocationDesignation: userObj.allocationDesignation,
      reason: this.fc.reason.value,
      startDate: moment(this.fc.startDate.value).format("YYYY-MM-DDTHH:mm:ss.SSS") + 'Z',
      endDate:  moment(this.fc.endDate.value).format("YYYY-MM-DDTHH:mm:ss.SSS") + 'Z',
      remarks: this.fc.comments.value,
      managerEmail:this.fc.managerEmail.value
    };
console.log("postBosy",postBody )
    this.dataApi.addRequest(postBody).subscribe(() => {
      this.snackbar.open('Your request has been successfully submitted.', null, {
        duration: 10 * 1000
      });

      this.router.navigate(['/']);

    },
    _err => {
      this.snackbar.open(_err.error.message, null, {
        duration: 10 * 1000
      });
    }
    );
  }

  requestTypeSelected(event: any) {
    const selectedTypeId = event.value;
    this.applicableReasons = this.requestTypes.find(
      f => f.requestTypeId == selectedTypeId
    ).reasons;
  }

}

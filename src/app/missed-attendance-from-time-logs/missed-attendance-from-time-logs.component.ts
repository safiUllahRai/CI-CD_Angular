import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { DataApiService } from 'src/app/data-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-missed-attendance-from-time-logs',
  templateUrl: './missed-attendance-from-time-logs.component.html',
  styleUrls: ['./missed-attendance-from-time-logs.component.scss']
})
export class MissedAttendanceFromTimeLogsComponent implements OnInit {
  data: string;
  public __FORM_TITLE = "Missed Attendance";
  formData: any = {};
  attendanceFormGroup: FormGroup;
  startDateMinDate: Date;
  fileToUpload: File | null = null;

  form_data = new FormData();

  officeLocations = [
    {value: 'Karachi', viewValue: 'Karachi'},
    {value: 'Lahore', viewValue: 'Lahore'},
    {value: 'Islamabad', viewValue: 'Islamabad'},
    {value: 'Remote', viewValue: 'Remote'},
  ];
  missedAttendanceResons = [
    { value: 'Personal Fault', viewValue: 'Personal Fault' },
    { value: 'Email Not Activated', viewValue: 'Email Not Activated' },
    { value: 'Application Not Working', viewValue: 'Application Not Working' },

  ];
  userObj: any;

  constructor( private dataApi: DataApiService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private http: HttpClient,
    private API: ApiService) { 
    this.userObj = JSON.parse(localStorage.getItem('Attendance-user'));
    }
  get user(): any {
    return JSON.parse(localStorage.getItem('Attendance-user'));
  }
  ngOnInit() {
const dateCheck = JSON.parse(localStorage.getItem('Attendance-dataFromLogs'));
console.log("dated",dateCheck.dated)




    this.attendanceFormGroup = this.formBuilder.group({
      // firstName: ['', [Validators.required]],
      // lastName: ['', [Validators.required]],
      // fatherName: [''],
      // personalNo:['',[Validators.required, Validators.maxLength(11)] ],
      // employeeType:['',[Validators.required]],
      // qualification: [''],
      email: ['', ],
      officeLocation: ['',[Validators.required]],
      reason: ['',[Validators.required]],
      clientLocation:['',],
      date: ['',[Validators.required, this.dateValidator]],
      checkIn:['',[Validators.required, this.dateValidator]],
      checkOut:['',[Validators.required, this.dateValidator]],
      comments:[''],
      attachMents: [''],
      appTimeStamp:[new Date()],
  }
  
  
  );
  if(dateCheck.dated){
    this.fc.date.setValue(dateCheck.dated)
   }

  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
get fc() { return this.attendanceFormGroup.controls; }
dateValidator(control: FormControl) {
  const selectedDate = new Date(control.value);
  const currentDate = new Date();

  // Disable today's date and future dates
  if (selectedDate > currentDate) {
    return { invalidDate: true };
  }

  return null;
}
getCustomImage(): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Convert the canvas image to a data URL
  const dataUrl = canvas.toDataURL('image/png');

  // Convert the data URL to a Blob
  return fetch(dataUrl)
    .then(response => response.blob());
}

async submit(){

    const formData = new FormData();

if(this.fileToUpload === null){
const customImage =  this.getCustomImage();
formData.append('myFile', await customImage);
}else {

formData.append('myFile', this.fileToUpload);
console.log("myFile binaru", this.fileToUpload)
}

formData.append('email', this.userObj.email);
formData.append('officeLocation', this.fc.officeLocation.value);
formData.append('reason', this.fc.reason.value);
formData.append('clientLocation', this.fc.clientLocation.value);
formData.append('missedDate', moment(this.fc.date.value).format("YYYY-MM-DD"));
formData.append('checkIn', this.fc.date.value+'T'+this.fc.checkIn.value +'.320Z');
formData.append('checkOut',this.fc.date.value+'T'+this.fc.checkOut.value +'.320Z');
formData.append('comments', this.fc.comments.value);
formData.append('userName', this.userObj.username);
formData.append('appTimeStamp', moment(this.fc.appTimeStamp.value).format("YYYY-MM-DDTHH:mm:ss.SSS") + 'Z');


const token =  this.API.get('token', true);
const headers = new HttpHeaders({   
'Authorization': `Bearer ${token}`,

});

this.http.post('https://attendanceapi.tallymarkscloud.com/attendanceApp/employee/missingAttendance/add', formData, { headers }).subscribe(
response => {
  console.log('Success:', response);
  // Handle the response from the API
  this.router.navigate(['/']);
},
_err => {
  var error 
  console.log("error", _err)
  this.snackbar.open(_err.error['message'], null, {
    duration: 10 * 1000
  });
});;

  }



}

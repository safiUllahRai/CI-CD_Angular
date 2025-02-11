import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private http: HttpClient,private API: ApiService) { }

  

  sendData(data: any) {
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
    const token =  this.API.get('token', true);
    const headers = new HttpHeaders({
      
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    });

    

    return this.http.post('https://attendance.tallymarkscloud.com/attendanceApp/employee/missingAttendance/add', formData, { headers });
  }
}

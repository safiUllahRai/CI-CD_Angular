import { DataApiService } from './../../../data-api.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

    __ACCESS_EDIT_DETAIL = true;
    __PAGE_ROUTE = '/employees';
    __PAGE_SUBTITLE;
    __PAGE_TITLE = 'Employee Details';

    constructor(
        private dataApi: DataApiService,
        private route: ActivatedRoute,
        private snackbar: MatSnackBar
    ) { }

    id: string;
    Details: any;
    ngOnInit() {
        this.route.params.subscribe( k => this.id = k['id'] );
        this.dataApi.getSingleEmployee(this.id)
            .subscribe(
                _emp => {
                    this.Details = {
                         'First Name' : _emp['firstName'],
                         'Last Name' : _emp['lastName'],
                         'Father Name' : _emp['fatherName'],
                         'Qualification' : _emp['qualification'],
                         'Email' : _emp['email'],
                         'CINC #' : _emp['cnic'],
                         'Contact Number' : _emp['contactNo'],
                         'Manager' : _emp['managerName'],
                         'Status' : _emp['enabled'] ? 'Enabled' : 'Disabled',
                         'Department Name' : _emp['departmentName'],
                         'Designation' : _emp['designationName'],
                    }
                },       _err => {
                  this.snackbar.open(_err.error.message, null, {
                    duration: 10 * 1000
                  });
                }
            )
    }

}

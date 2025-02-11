import { DataApiService } from 'src/app/data-api.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    __ACCESS_EDIT_DETAIL = true;
    __PAGE_ROUTE = "/user";
    __PAGE_SUBTITLE;
    __PAGE_TITLE = "User Details";

    constructor(
        private dataApi: DataApiService,
        private route: ActivatedRoute,
        private snackbar: MatSnackBar
    ) { }

    id: string;
    Details: any;
    ngOnInit() {
        this.route.params.subscribe( k => this.id = k['id'] );
        this.dataApi.getSingleUser(this.id)
            .subscribe(
                _user => {
                    this.Details = {
                        "Name" : _user["name"],
                        "Username" : _user["username"],
                        "Mobile No" : _user["mobileNo"],
                        "Email" : _user["email"],
                        "Designation" : _user["designation"],
                        "Locked" : _user["accountLocked"] ? 'Yes' : 'No',
                        "Expired" : _user["accountExpired"] ? 'Yes' : 'No',
                        "Credentials Expired" : _user["credentialsExpired"] ? 'Yes' : 'No',
                        "Authority" : _user["roles"].map( k => k.name )
                    }
                },        _err => {
                    this.snackbar.open(_err.error.message, null, {
                      duration: 10 * 1000
                    });
                  }
            )
    }

}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "./api.service";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  


  roles: any;
  anio: any;
  isLoggedInFromButton: any;
  loggedinUser: string;
  // user: any;
  constructor( private router: Router,
    private API: ApiService,
   ) {
    this.anio = new Date().getFullYear();
    this.loggedinUser = this.API.get('isLoggedin');

  }

  ngOnInit() {
    console.log("loggein user", this.loggedinUser)
  }




  logout() {
    localStorage.clear();
    window.location.reload();
  }
}

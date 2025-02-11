import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  get user(): any {
    return JSON.parse(localStorage.getItem('Attendance-user'));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('Attendance-isLoggedin') != null) {
      console.log('loggedinuset',localStorage.getItem('Attendance-isLoggedin'))
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}

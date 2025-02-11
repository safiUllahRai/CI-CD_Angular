import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private USER_CHECKIN_FLAG = 'user_checked_in';

  constructor() { }

  addUserCheckIn(){
    localStorage.setItem(this.USER_CHECKIN_FLAG, 'true');
  }

  hasUserCheckedIn(){
    return localStorage.getItem(this.USER_CHECKIN_FLAG) === 'true';
  }

  addUserCheckout(){
    localStorage.removeItem(this.USER_CHECKIN_FLAG);
  }
}

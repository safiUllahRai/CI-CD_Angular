import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
  public static token = null;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.remoteApiBaseUrl;
  }

  public loginWithMicrosoft(username) {
    const uri = `${this.baseUrl}login`;
    const body = `username=${username}`;
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    return this.http.post(uri, body, { headers }).pipe(
      map(response => response as any)
    );
  }

  public resetPassword(email) {
    const uri = `${this.baseUrl}user/forgotPassword`;
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post(uri, email, {headers} ).pipe(
      map(response => response as any)
    );
  }

  public loginV2(username, password) {
    const uri = `${this.baseUrl}login`;
    const body = `username=${username}&password=${password}`;
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    return this.http.post(uri, body, { headers }).pipe(
      map(response => response as any)
    );
  }

  public login(loginParams) {
    loginParams.grant_type = "password";
    return this.http.post("login", loginParams).pipe(
      map(response => response as any)
    );
  }

  // public logout() {
  //   return this.http.post("oauth/logout").pipe(
  //     map(response => response as any)
  //   );
  // }

  public resetTokenPassword(_email) {
    return this.http.get("user/requestPasswordResetToken", {
      params: { email: _email }
    }).pipe(
      map(response => response as any)
    );
  }

  public isAuthenticated() {
    const user = JSON.parse(localStorage.getItem("Attendance-user"));
    return user ? true : false;
  }

  public resetTokenPasswordChange(_userId, _token, _password) {
    return this.http.post(
      `/user/resetPasswordByPasswordResetToken/${_userId}/${_token}`,
      { newPassword: _password }
    ).pipe(
      map(response => response as any)
    );
  }
}

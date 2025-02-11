import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { ApiService } from './api.service';

declare let swal: any;

const __exceptionList = [
  '',
  'oauth/token',
  'global/services/requestPasswordResetToken',
  'global/services/resetPasswordByPasswordResetToken'
];

@Injectable()
export class HttpClientService {
  private baseUrl: string;

  constructor(private http: HttpClient, private API: ApiService) {
    this.baseUrl = environment.remoteApiBaseUrl;
  }

  createAuthorizationHeader(headers: HttpHeaders, customeHeaders?: any, noAuth?: boolean): HttpHeaders {
    const token = 'Bearer ' + this.API.get('token', true);
    headers = headers.append('Authorization', token);
  
    for (const _k in customeHeaders) {
      if (Object.prototype.hasOwnProperty.call(customeHeaders, _k)) {
        headers = headers.append(_k, customeHeaders[_k]);
      }
    }
  
    return headers;
  }
  

  get(url: string, custHeaders?: any, params?: any, search?: any): Observable<any> {
    const _url = this.baseUrl + url;
    const _noAuth = this.checkAuthorizationForUrl(url);
  
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers, custHeaders, _noAuth); // Assign the modified headers back to the variable
  
    let options = { headers, params: new HttpParams({ fromObject: params }), responseType: 'json' as const };
  
    return this.http.get(_url, options).pipe(
      catchError((error) => {
        // Handle errors
        return throwError(error);
      })
    );
  }
  
  post(url: string, data?: any, custHeaders?: any, params?: any): Observable<any> {
    const _url = this.baseUrl + url;
    const _noAuth = this.checkAuthorizationForUrl(url);
  
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers, custHeaders, _noAuth); // Assign the modified headers back to the variable
  
    let options = { headers, params: new HttpParams({ fromObject: params }), responseType: 'json' as const };
  
    return this.http.post(_url, data, options).pipe(
      catchError((error) => {
        // Handle errors
        return throwError(error);
      })
    );
  }
  
  put(url: string, data?: any, custHeaders?: any, params?: any): Observable<any> {
    const _url = this.baseUrl + url;
    const _noAuth = this.checkAuthorizationForUrl(url);
  
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers, custHeaders, _noAuth); // Assign the modified headers back to the variable
  
    let options = { headers, params: new HttpParams({ fromObject: params }), responseType: 'json' as const };
  
    return this.http.put(_url, data, options).pipe(
      catchError((error) => {
        // Handle errors
        return throwError(error);
      })
    );
  }
  
  delete(url: string, custHeaders?: any, params?: any, search?: any): Observable<any> {
    const _url = this.baseUrl + url;
    const _noAuth = this.checkAuthorizationForUrl(url);
  
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers, custHeaders, _noAuth); // Assign the modified headers back to the variable
  
    let options = { headers, params: new HttpParams({ fromObject: params }), responseType: 'json' as const };
  
    return this.http.delete(_url, options).pipe(
      catchError((error) => {
        // Handle errors
        return throwError(error);
      })
    );
  }
  

  private checkAuthorizationForUrl(url: string): boolean {
    return _.includes(__exceptionList, url);
  }

  public static errorHandler(err: any) {
    // Handle error
  }
}

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class LogginService {
  private url = 'http://localhost:8000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public isLoginStatus: boolean;
  public userRole: boolean;
  public customerId: number;

  getLoginStatus() {
    return this.isLoginStatus;
  }
  setLoginStatus(status: any) {
    this.isLoginStatus = status;
  }

  getUserRole() {
    return this.userRole;
  }

  setUserRole(role: any) {
    this.userRole = role;
  }

  getCustomerId() {
    return this.customerId;
  }

  setCustomerId(id: any) {
    this.customerId = id;
  }

  constructor(private httpClient: HttpClient) {}

  login(username: any, password: any): Observable<any> {
    return this.httpClient
      .post<Login>(
        this.url + '/login/' + username + '/' + password,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  logout(): Observable<any> {
    this.isLoginStatus = false;
    this.userRole = false;
    return this.httpClient
      .post<Login>(this.url + '/logout', this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    } else {
      console.log('Server Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    }
    return throwError(eResponse.error.message);
  }
}

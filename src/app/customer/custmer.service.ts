import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustmerService {
  private url = 'http://localhost:8000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url + '/customer' + '/findall');
    pipe(catchError(this.handleError));
  }

  deleteCustomer(customerId: number): Observable<Customer> {
    return this.httpClient
      .delete<Customer>(this.url + '/customer/delete/' + customerId)
      .pipe(catchError(this.handleError));
  }

  addCustomer(cust: any): Observable<any> {
    return this.httpClient
      .post<Customer>(
        this.url + '/customer/add',
        JSON.stringify(cust),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  updateCustomer(cust: any): Observable<any> {
    console.log(cust);
    return this.httpClient
      .put<Customer>(
        this.url + '/customer/update',
        JSON.stringify(cust),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  getCustomerById(id: any): Observable<Customer> {
    return this.httpClient
      .get<Customer>(this.url + '/customer/view/' + id)
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

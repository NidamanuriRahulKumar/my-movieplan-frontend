import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Seat } from './seat';
@Injectable({
  providedIn: 'root',
})
export class SeetService {
  private url = 'http://localhost:8000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAllSeats(): Observable<Seat[]> {
    return this.httpClient
      .get<Seat[]>(this.url + '/seats' + '/findall')
      .pipe(catchError(this.handleError));
  }

  addSeat(seat: any): Observable<any> {
    return this.httpClient
      .post<Seat>(
        this.url + '/seats/add',
        JSON.stringify(seat),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  updateSeat(seat: any): Observable<any> {
    console.log(seat);
    return this.httpClient
      .put<Seat>(
        this.url + '/seats/update',
        JSON.stringify(seat),
        this.httpOptions
      )
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

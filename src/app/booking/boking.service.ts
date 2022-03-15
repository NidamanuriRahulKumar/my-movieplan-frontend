import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BokingService {
  private url = 'http://localhost:8000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getAllBookings(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(this.url + '/booking' + '/findall');
    pipe(catchError(this.handleError));
  }

  addBooking(book: any, showId: number): Observable<any> {
    return this.httpClient
      .post<Booking>(
        this.url + '/booking/insert?showId=' + showId,
        JSON.stringify(book),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  updateMovie(book: any): Observable<any> {
    return this.httpClient
      .put<Booking>(
        this.url + '/booking/update',
        JSON.stringify(book),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  getBookingById(id: any): Observable<Booking> {
    return this.httpClient
      .get<Booking>(this.url + '/booking/viewbooking/' + id)
      .pipe(catchError(this.handleError));
  }

  deleteBooking(bookingId: number): Observable<Booking> {
    return this.httpClient
      .delete<Booking>(this.url + '/booking/ticketbooking/' + bookingId)
      .pipe(catchError(this.handleError));
  }

  getTotalCost(id: any): Observable<Booking> {
    return this.httpClient
      .get<Booking>(this.url + '/booking/cost/' + id)
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

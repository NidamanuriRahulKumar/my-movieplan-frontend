import { Component, OnInit } from '@angular/core';
import { BokingService } from '../boking.service';

@Component({
  selector: 'app-list-view-booking',
  templateUrl: './list-view-booking.component.html',
  styleUrls: ['./list-view-booking.component.css'],
})
/**
 * @author Jyothi
 * @Description returns list of bookings done by the customer.
 */
export class ListViewBookingComponent implements OnInit {
  bookings: any[];
  constructor(private bService: BokingService) {}

  ngOnInit(): void {
    this.bService.getAllBookings().subscribe((data: any[]) => {
      this.bookings = data;
    });
  }
}

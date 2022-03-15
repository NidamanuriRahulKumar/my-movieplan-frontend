import { Component, OnInit } from '@angular/core';
import { BokingService } from '../boking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { Show } from 'src/app/show/show';

@Component({
  selector: 'app-detail-view-booking',
  templateUrl: './detail-view-booking.component.html',
  styleUrls: ['./detail-view-booking.component.css'],
})

/**
 * @author Jyothi
 * @Description It is to display the booking summary of the Customer.
 */
export class DetailViewBookingComponent implements OnInit {
  booking: Booking;
  bookingId: number;
  show: Show;
  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private bService: BokingService
  ) {}

  ngOnInit(): void {
    this.bookingId = this.actRouter.snapshot.params['bookingId'];
    this.bService.getTotalCost(this.bookingId);
    this.bService.getBookingById(this.bookingId).subscribe((data: Booking) => {
      this.booking = data;
      console.log(this.booking.show.showId);
    });
  }
}

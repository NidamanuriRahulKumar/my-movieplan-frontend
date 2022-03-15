import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BokingService } from '../boking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})

/**
 * @author Jyothi
 * @Description It is used to perform movie booking by the Customer.
 */
export class CreateBookingComponent implements OnInit {
  bookingForm: FormGroup;
  errorMessage: string;
  showId: number;
  bookingId: number;
  constructor(
    private fb: FormBuilder,
    private bService: BokingService,
    private router: Router,
    private actRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showId = this.actRouter.snapshot.params['showId'];
    this.bookingForm = this.fb.group({
      transactionMode: [''],
      transactionStatus: [''],
      bookingDate: [''],
    });
  }

  addABooking() {
    this.bService.addBooking(this.bookingForm.value, this.showId).subscribe(
      (res: any) => {
        console.log(res.transactionId);
        this.router.navigate(['ticket/add', res.transactionId]);
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }
}

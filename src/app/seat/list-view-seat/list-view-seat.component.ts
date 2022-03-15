import { Component, OnInit } from '@angular/core';
import { Seat } from '../seat';
import { SeetService } from '../seet.service';

@Component({
  selector: 'app-list-view-seat',
  templateUrl: './list-view-seat.component.html',
  styleUrls: ['./list-view-seat.component.css'],
})
export class ListViewSeatComponent implements OnInit {
  seats: any[];
  constructor(private mService: SeetService) {}

  ngOnInit(): void {
    this.mService.getAllSeats().subscribe((data: Seat[]) => {
      this.seats = data;
    });
  }
}

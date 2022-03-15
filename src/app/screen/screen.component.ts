import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css'],
})
export class ScreenComponent implements OnInit {
  theatreId: number;
  constructor() {}

  ngOnInit(): void {}
  getTheatreId(id: number) {
    this.theatreId = id;
  }
}

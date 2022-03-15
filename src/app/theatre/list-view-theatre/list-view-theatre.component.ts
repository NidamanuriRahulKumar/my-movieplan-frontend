import { Component, OnInit } from '@angular/core';
import { Scren } from 'src/app/screen/screen';
import { Show } from 'src/app/show/show';
import { Theatre } from '../theatre';
import { ThetreService } from '../thetre.service';

@Component({
  selector: 'app-list-view-theatre',
  templateUrl: './list-view-theatre.component.html',
  styleUrls: ['./list-view-theatre.component.css'],
})
export class ListViewTheatreComponent implements OnInit {
  theatres: any[];
  screen: Scren[];
  show: Show[];
  constructor(private tService: ThetreService) {}

  ngOnInit(): void {
    this.tService.getAllTheatres().subscribe((data: Theatre[]) => {
      this.theatres = data;
      for (let scr of this.theatres) {
        console.log(scr.screen);
      }
    });
  }

  removeTheatre(theatreId: number) {
    this.tService.deleteTheatre(theatreId).subscribe((data: Theatre) => {
      this.ngOnInit();
      console.log(data);
    });
  }
}

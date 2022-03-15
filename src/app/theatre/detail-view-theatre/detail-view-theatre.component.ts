import { Component, OnInit } from '@angular/core';
import { Theatre } from '../theatre';
import { ActivatedRoute, Router } from '@angular/router';
import { ThetreService } from '../thetre.service';
import { Scren } from '../../screen/screen';
import { Show } from 'src/app/show/show';

@Component({
  selector: 'app-detail-view-theatre',
  templateUrl: './detail-view-theatre.component.html',
  styleUrls: ['./detail-view-theatre.component.css'],
})
export class DetailViewTheatreComponent implements OnInit {
  theatre: Theatre;
  theatreId: number;
  screen: Scren[];
  show: Show;
  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private tService: ThetreService
  ) {}

  ngOnInit(): void {
    this.theatreId = this.actRouter.snapshot.params['theatreId'];
    this.tService.findTheatre(this.theatreId).subscribe((data: Theatre) => {
      this.theatre = data;
      for (let scr of this.theatre.screen) {
        console.log(scr);
        for (let sh of scr.show) {
          console.log(sh);
        }
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

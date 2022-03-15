import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theatre } from '../theatre';
import { ThetreService } from '../thetre.service';

@Component({
  selector: 'app-update-theatre',
  templateUrl: './update-theatre.component.html',
  styleUrls: ['./update-theatre.component.css'],
})
export class UpdateTheatreComponent implements OnInit {
  theatreId: number;
  theatre: Theatre;

  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private tService: ThetreService
  ) {}

  ngOnInit(): void {
    this.theatre = new Theatre();
    this.theatreId = this.actRouter.snapshot.params['theatreId'];
    this.tService.findTheatre(this.theatreId).subscribe((data) => {
      this.theatre = data;
    });
  }
  updateATheatre() {
    this.tService.updateTheatre(this.theatre).subscribe((res) => {
      this.router.navigate(['/theatre']);
    });
  }
}

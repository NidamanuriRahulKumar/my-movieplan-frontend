import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShhowService } from '../shhow.service';
import { Show } from '../show';

@Component({
  selector: 'app-update-show',
  templateUrl: './update-show.component.html',
  styleUrls: ['./update-show.component.css'],
})
export class UpdateShowComponent implements OnInit {
  showId: number;
  show: Show;

  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private shService: ShhowService
  ) {}

  ngOnInit(): void {
    this.show = new Show();
    this.showId = this.actRouter.snapshot.params['showId'];
    this.shService.getShowById(this.showId).subscribe((data) => {
      this.show = data;
    });
  }
  updateAShow() {
    this.shService.updateShow(this.show).subscribe((res) => {
      this.router.navigate(['/show/view', this.showId]);
    });
  }
}

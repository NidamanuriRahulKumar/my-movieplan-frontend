import { Component, OnInit } from '@angular/core';
import { Scren } from '../screen';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreService } from '../scre.service';

@Component({
  selector: 'app-update-screens',
  templateUrl: './update-screens.component.html',
  styleUrls: ['./update-screens.component.css'],
})

/**
 * @author Thejesh
 * @Description admin can update the screen details in a theatre.
 */
export class UpdateScreensComponent implements OnInit {
  screenId: number;
  scre: Scren;

  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private sService: ScreService
  ) {}

  ngOnInit(): void {
    this.scre = new Scren();
    this.screenId = this.actRouter.snapshot.params['screenId'];
    this.sService.getScreenById(this.screenId).subscribe((data) => {
      this.scre = data;
    });
  }
  updateAScreen() {
    this.sService.updateScreen(this.scre).subscribe((res) => {
      this.router.navigate(['/screen']);
    });
  }
}

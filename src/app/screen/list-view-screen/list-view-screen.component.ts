import { Component, OnInit } from '@angular/core';
import { ScreService } from '../scre.service';

@Component({
  selector: 'app-list-view-screen',
  templateUrl: './list-view-screen.component.html',
  styleUrls: ['./list-view-screen.component.css'],
})

/**
 * @author Thejesh
 * @Description admin can manage screens from the dashboard.
 */
export class ListViewScreenComponent implements OnInit {
  screens: any[];
  constructor(private scService: ScreService) {}

  ngOnInit(): void {
    this.scService.getAllScreens().subscribe((data: any[]) => {
      this.screens = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ShhowService } from '../shhow.service';

@Component({
  selector: 'app-list-view-show',
  templateUrl: './list-view-show.component.html',
  styleUrls: ['./list-view-show.component.css'],
})
export class ListViewShowComponent implements OnInit {
  shows: any[];
  constructor(private shService: ShhowService) {}

  ngOnInit(): void {
    this.shService.getAllShows().subscribe((data: any[]) => {
      this.shows = data;
    });
  }
}

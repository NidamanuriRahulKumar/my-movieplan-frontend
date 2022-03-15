import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { MveeService } from '../movie/mvee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  topRatedMovies: Movie[];
  latestMovies: Movie[];
  constructor(private mService: MveeService) {}

  ngOnInit(): void {
    this.mService.getAllMovies().subscribe((data: Movie[]) => {
      this.topRatedMovies = data
        .sort((a, b) => (a.movieRating > b.movieRating ? -1 : 1))
        .slice(0, 8);
    });
    this.mService.getAllMovies().subscribe((data: Movie[]) => {
      this.latestMovies = data
        .sort((a, b) => (a.movieDate > b.movieDate ? -1 : 1))
        .slice(0, 3);
    });
  }
}

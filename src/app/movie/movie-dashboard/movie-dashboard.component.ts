import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MveeService } from '../mvee.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css'],
})
export class MovieDashboardComponent implements OnInit {
  movies: any[];
  constructor(private mService: MveeService) {}

  ngOnInit(): void {
    this.mService.getAllMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }

  removeMovie(movieId: number) {
    this.mService.deleteMovie(movieId).subscribe((data: Movie) => {
      this.ngOnInit();
      console.log(data);
    });
  }
}

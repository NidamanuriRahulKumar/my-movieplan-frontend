import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MveeService } from '../mvee.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
})
export class AllMoviesComponent implements OnInit {
  movies: any[];
  genre: string;
  searchArray: any[];
  sortArray: any[];
  movieFilterValue: string;
  constructor(private mService: MveeService) {}

  ngOnInit(): void {
    this.mService.getAllMovies().subscribe((data: Movie[]) => {
      this.movies = data;
      this.searchArray = data;
      this.sortArray = data;
    });
  }

  removeMovie(movieId: number) {
    this.mService.deleteMovie(movieId).subscribe((data: Movie) => {
      this.ngOnInit();
      console.log(data);
    });
  }

  searchByGenre() {
    this.movies = this.searchArray.filter(
      (data) => data.movieGenre == this.genre
    );
  }

  topRated() {
    this.movies = this.sortArray
      .sort((a, b) => (a.movieRating > b.movieRating ? -1 : 1))
      .slice(0, 4);
  }

  latestMovies() {
    this.movies = this.sortArray.sort((a, b) =>
      a.movieDate > b.movieDate ? -1 : 1
    );
  }
  allMovies() {
    this.ngOnInit();
  }
}

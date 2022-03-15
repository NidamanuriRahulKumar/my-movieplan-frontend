import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MveeService } from '../mvee.service';

@Component({
  selector: 'app-update-movies',
  templateUrl: './update-movies.component.html',
  styleUrls: ['./update-movies.component.css'],
})
export class UpdateMoviesComponent implements OnInit {
  movieId: number;
  mvee: Movie;
  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private mService: MveeService
  ) {}

  ngOnInit(): void {
    this.mvee = new Movie();
    this.movieId = this.actRouter.snapshot.params['movieId'];
    this.mService.getMovieById(this.movieId).subscribe((data) => {
      this.mvee = data;
    });
  }
  updateAMovie() {
    this.mService.updateMovie(this.mvee).subscribe((res) => {
      this.router.navigate(['/movie/admin/details', this.movieId]);
    });
  }
}

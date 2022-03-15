import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movie/movie';
import { MveeService } from 'src/app/movie/mvee.service';
import { ShhowService } from '../shhow.service';
import { Show } from '../show';
@Component({
  selector: 'app-detai-view-show',
  templateUrl: './detai-view-show.component.html',
  styleUrls: ['./detai-view-show.component.css'],
})
export class DetaiViewShowComponent implements OnInit {
  sh: Show;
  showId: number;
  movies: any[];
  mvee: Movie;
  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private shService: ShhowService,
    private mService: MveeService
  ) {}

  ngOnInit(): void {
    this.showId = this.actRouter.snapshot.params['showId'];
    this.shService.getShowById(this.showId).subscribe((data: Show) => {
      this.sh = data;
    });
    this.mService.getAllMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }

  linkMovieToShow(movieId: number, showId: number) {
    this.mService.getMovieById(movieId).subscribe((data) => {
      this.mService.addMovieToShow(data, showId).subscribe((dataa: Movie) => {
        this.router.navigate(['/show']);
      });
    });
  }
}

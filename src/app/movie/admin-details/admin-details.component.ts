import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MveeService } from '../mvee.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css'],
})
export class AdminDetailsComponent implements OnInit {
  mvee: Movie;
  movieId: number;
  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private mService: MveeService
  ) {}

  ngOnInit(): void {
    this.movieId = this.actRouter.snapshot.params['movieId'];
    this.mService.getMovieById(this.movieId).subscribe((data: Movie) => {
      this.mvee = data;
    });
  }

  removeMovie(movieId: number) {
    this.mService.deleteMovie(movieId).subscribe((data: Movie) => {
      //this.ngOnInit();
      //console.log(data);
      this.router.navigate(['/movie/admin/list']);
    });
  }
}

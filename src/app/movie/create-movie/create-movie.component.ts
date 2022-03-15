import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MveeService } from '../mvee.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  mveeForm: FormGroup;
  errorMessage: string;
  constructor(
    private fb: FormBuilder,
    private mService: MveeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mveeForm = this.fb.group({
      movieName: ['', Validators.required],
      movieHours: ['', Validators.required],
      movieGenre: ['', Validators.required],
      movieLanguage: ['', Validators.required],
      movieDescription: ['', Validators.required],
      movieRating: ['', Validators.required],
      movieDate: [''],
    });
  }

  addAMovie() {
    this.mService.addMovie(this.mveeForm.value).subscribe(
      (res: any) => {
        this.router.navigate(['/movie/admin/list']);
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }
}

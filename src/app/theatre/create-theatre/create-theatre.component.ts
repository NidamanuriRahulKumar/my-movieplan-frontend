import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThetreService } from '../thetre.service';

@Component({
  selector: 'app-create-theatre',
  templateUrl: './create-theatre.component.html',
  styleUrls: ['./create-theatre.component.css'],
})
export class CreateTheatreComponent implements OnInit {
  theatreform: FormGroup;
  errorMessage: string;
  constructor(
    private fb: FormBuilder,
    private theatreService: ThetreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.theatreform = this.fb.group({
      theatreName: ['', Validators.required],
      managerName: ['', Validators.required],
      theatreCity: ['', Validators.required],
      managerContact: ['', Validators.required],
    });
  }

  addATheatre() {
    this.theatreService.addTheatre(this.theatreform.value).subscribe(
      (res: any) => {
        this.router.navigate(['/theatre']);
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }
}

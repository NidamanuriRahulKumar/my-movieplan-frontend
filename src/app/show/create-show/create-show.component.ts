import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShhowService } from '../shhow.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-show',
  templateUrl: './create-show.component.html',
  styleUrls: ['./create-show.component.css'],
})
export class CreateShowComponent implements OnInit {
  showForm: FormGroup;
  errorMessage: string;
  screenId: number;
  theatreId: number;
  datepipe: DatePipe = new DatePipe('en-US');
  constructor(
    private fb: FormBuilder,
    private shService: ShhowService,
    private router: Router,
    private actRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.screenId = this.actRouter.snapshot.params['screenId'];
    this.theatreId = this.actRouter.snapshot.params['theatreId'];
    this.showForm = this.fb.group({
      showName: ['', Validators.required],
      showStartTime: [''],
      showEndTime: [''],
      showDate: [''],
    });
  }

  addAShow() {
    this.showForm.value.showEndTime = this.datepipe.transform(
      this.showForm.value.showEndTime,
      'YYYY-MM-dd HH:mm'
    );
    this.showForm.value.showStartTime = this.datepipe.transform(
      this.showForm.value.showStartTime,
      'YYYY-MM-dd HH:mm'
    );
    console.log(this.showForm.value.showEndTime);
    this.shService
      .addShow(this.showForm.value, this.theatreId, this.screenId)
      .subscribe(
        (res: any) => {
          this.router.navigate(['/screen']);
        },
        (error: any) => {
          this.errorMessage = error;
        }
      );
  }
}

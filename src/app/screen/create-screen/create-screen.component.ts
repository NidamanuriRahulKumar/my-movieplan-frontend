import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreService } from '../scre.service';
@Component({
  selector: 'app-create-screen',
  templateUrl: './create-screen.component.html',
  styleUrls: ['./create-screen.component.css'],
})

/**
 * @author Thejesh
 * @Description used to create screens in the theatre.
 */
export class CreateScreenComponent implements OnInit {
  /*
  @Output() theatreIdToScreen = new EventEmitter<number>();
  */
  screenForm: FormGroup;
  errorMessage: string;
  theatreId: number;

  constructor(
    private fb: FormBuilder,
    private scService: ScreService,
    private router: Router,
    private actRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.theatreId = this.actRouter.snapshot.params['theatreId'];
    this.screenForm = this.fb.group({
      screenName: ['', Validators.required],
      rows: ['', Validators.required],
      columns: ['', Validators.required],
    });
  }

  addAScreen() {
    this.scService.addScreen(this.screenForm.value, this.theatreId).subscribe(
      (res: any) => {
        //this.theatreIdToScreen.emit(this.theatreId);
        this.router.navigate(['/theatre/view', this.theatreId]);
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }
}

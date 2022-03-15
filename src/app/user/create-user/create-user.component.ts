import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsrService } from '../usr.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  errorMessage: string;
  constructor(
    private fb: FormBuilder,
    private uService: UsrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  addAUser() {
    this.uService.addUser(this.userForm.value).subscribe(
      (res: any) => {
        this.router.navigate(['/signIn']);
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }
}

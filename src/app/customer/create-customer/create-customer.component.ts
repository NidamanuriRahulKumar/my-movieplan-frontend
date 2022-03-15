import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustmerService } from '../custmer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})

/**
 * @author Ganga Bhavani
 * @Description it is used to add Customer in the database.
 */
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  errorMessage: string;
  constructor(
    private fb: FormBuilder,
    private cService: CustmerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customerName: [''],
      address: [''],
      password: [''],
      email: [''],
      mobileNumber: [''],
    });
  }
  addACustomer() {
    this.cService.addCustomer(this.customerForm.value).subscribe(
      (res: any) => {
        this.router.navigate(['']);
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }
}

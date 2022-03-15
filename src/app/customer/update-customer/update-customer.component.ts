import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustmerService } from '../custmer.service';
import { Customer } from '../customer';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})

/**
 * @author Ganga Bhavani
 * @Description update customer Details.
 */
export class UpdateCustomerComponent implements OnInit {
  customerId: number;
  cust: Customer;
  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private cService: CustmerService
  ) {}

  ngOnInit(): void {
    this.cust = new Customer();
    this.customerId = this.actRouter.snapshot.params['customerId'];
    this.cService.getCustomerById(this.customerId).subscribe((data) => {
      this.cust = data;
      console.log(data);
    });
  }
  updateACustomer() {
    this.cService.updateCustomer(this.cust).subscribe((res) => {
      this.router.navigate(['']);
    });
  }
}

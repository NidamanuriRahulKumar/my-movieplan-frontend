import { Component, OnInit } from '@angular/core';
import { LogginService } from '../login/loggin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userRole: any;
  status: boolean;
  constructor(public lService: LogginService) {}

  ngOnInit(): void {
    // this.status = this.lService.getLoginStatus();
    // console.log(this.lService.getUserRole());
    // if (this.status != true) {
    //   this.userRole = false;
    // } else {
    //   if (this.lService.getUserRole() === 'admin') {
    //     this.userRole = true;
    //   } else {
    //     this.userRole = false;
    //   }
    // }
    // console.log('mavbar status' + this.status);
    // console.log('mavbar rl' + this.userRole);
  }

  Logout() {
    this.lService.logout();
  }
}

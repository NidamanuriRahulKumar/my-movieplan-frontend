import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MTB-App';
  // @ViewChild(LoginComponent) login: any;

  // ngAfterViewInit() {
  //   console.log(this.login);
  // }
}

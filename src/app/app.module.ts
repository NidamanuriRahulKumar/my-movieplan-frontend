import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { AllMoviesComponent } from './movie/all-movies/all-movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';
import { UpdateMoviesComponent } from './movie/update-movies/update-movies.component';
import { DetailViewMovieComponent } from './movie/detail-view-movie/detail-view-movie.component';
import { HomeComponent } from './home/home.component';
import { TheatreComponent } from './theatre/theatre.component';
import { ListViewTheatreComponent } from './theatre/list-view-theatre/list-view-theatre.component';
import { DetailViewTheatreComponent } from './theatre/detail-view-theatre/detail-view-theatre.component';
import { CreateTheatreComponent } from './theatre/create-theatre/create-theatre.component';
import { UpdateTheatreComponent } from './theatre/update-theatre/update-theatre.component';
import { ScreenComponent } from './screen/screen.component';
import { ListViewScreenComponent } from './screen/list-view-screen/list-view-screen.component';
import { CreateScreenComponent } from './screen/create-screen/create-screen.component';
import { ShowComponent } from './show/show.component';
import { ListViewShowComponent } from './show/list-view-show/list-view-show.component';
import { CreateShowComponent } from './show/create-show/create-show.component';
import { DetailViewScreenComponent } from './screen/detail-view-screen/detail-view-screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDashboardComponent } from './movie/movie-dashboard/movie-dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { DetailViewBookingComponent } from './booking/detail-view-booking/detail-view-booking.component';
import { ListViewBookingComponent } from './booking/list-view-booking/list-view-booking.component';
import { SearchMoviePipe } from './movie/search-movie.pipe';
import { DetaiViewShowComponent } from './show/detai-view-show/detai-view-show.component';
import { AdminDetailsComponent } from './movie/admin-details/admin-details.component';
import { CreateBookingComponent } from './booking/create-booking/create-booking.component';
import { TicketComponent } from './ticket/ticket.component';
import { CreateTicketComponent } from './ticket/create-ticket/create-ticket.component';
import { SeatComponent } from './seat/seat.component';
import { ListViewSeatComponent } from './seat/list-view-seat/list-view-seat.component';
import { TheatresBookingComponent } from './theatre/theatres-booking/theatres-booking.component';
import { UpdateScreensComponent } from './screen/update-screens/update-screens.component';
import { UpdateShowComponent } from './show/update-show/update-show.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListViewCustomerComponent } from './customer/list-view-customer/list-view-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { CreateSeatComponent } from './seat/create-seat/create-seat.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    AllMoviesComponent,
    CreateMovieComponent,
    UpdateMoviesComponent,
    DetailViewMovieComponent,
    HomeComponent,
    TheatreComponent,
    ListViewTheatreComponent,
    DetailViewTheatreComponent,
    CreateTheatreComponent,
    UpdateTheatreComponent,
    ScreenComponent,
    ListViewScreenComponent,
    CreateScreenComponent,
    ShowComponent,
    ListViewShowComponent,
    CreateShowComponent,
    DetailViewScreenComponent,
    NavbarComponent,
    MovieDashboardComponent,
    BookingComponent,
    DetailViewBookingComponent,
    ListViewBookingComponent,
    SearchMoviePipe,
    DetaiViewShowComponent,
    AdminDetailsComponent,
    CreateBookingComponent,
    TicketComponent,
    CreateTicketComponent,
    SeatComponent,
    ListViewSeatComponent,
    TheatresBookingComponent,
    UpdateScreensComponent,
    UpdateShowComponent,
    UserComponent,
    CreateUserComponent,
    LoginComponent,
    CustomerComponent,
    CreateCustomerComponent,
    ListViewCustomerComponent,
    UpdateCustomerComponent,
    CreateSeatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

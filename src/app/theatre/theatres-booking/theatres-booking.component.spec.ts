import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatresBookingComponent } from './theatres-booking.component';

describe('TheatresBookingComponent', () => {
  let component: TheatresBookingComponent;
  let fixture: ComponentFixture<TheatresBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatresBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatresBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

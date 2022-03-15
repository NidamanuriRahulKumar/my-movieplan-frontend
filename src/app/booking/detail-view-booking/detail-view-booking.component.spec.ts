import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewBookingComponent } from './detail-view-booking.component';

describe('DetailViewBookingComponent', () => {
  let component: DetailViewBookingComponent;
  let fixture: ComponentFixture<DetailViewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

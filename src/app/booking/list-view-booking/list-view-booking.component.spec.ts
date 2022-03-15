import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewBookingComponent } from './list-view-booking.component';

describe('ListViewBookingComponent', () => {
  let component: ListViewBookingComponent;
  let fixture: ComponentFixture<ListViewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

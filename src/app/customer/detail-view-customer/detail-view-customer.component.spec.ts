import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewCustomerComponent } from './detail-view-customer.component';

describe('DetailViewCustomerComponent', () => {
  let component: DetailViewCustomerComponent;
  let fixture: ComponentFixture<DetailViewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

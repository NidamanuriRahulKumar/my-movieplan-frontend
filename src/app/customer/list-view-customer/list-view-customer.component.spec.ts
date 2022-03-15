import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewCustomerComponent } from './list-view-customer.component';

describe('ListViewCustomerComponent', () => {
  let component: ListViewCustomerComponent;
  let fixture: ComponentFixture<ListViewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

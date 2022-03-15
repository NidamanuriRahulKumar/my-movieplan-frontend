import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewSeatComponent } from './list-view-seat.component';

describe('ListViewSeatComponent', () => {
  let component: ListViewSeatComponent;
  let fixture: ComponentFixture<ListViewSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewSeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

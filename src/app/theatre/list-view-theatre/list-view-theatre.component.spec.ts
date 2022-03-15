import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewTheatreComponent } from './list-view-theatre.component';

describe('ListViewTheatreComponent', () => {
  let component: ListViewTheatreComponent;
  let fixture: ComponentFixture<ListViewTheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewTheatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

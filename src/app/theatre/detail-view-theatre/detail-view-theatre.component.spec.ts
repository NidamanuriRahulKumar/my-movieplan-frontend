import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewTheatreComponent } from './detail-view-theatre.component';

describe('DetailViewTheatreComponent', () => {
  let component: DetailViewTheatreComponent;
  let fixture: ComponentFixture<DetailViewTheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewTheatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

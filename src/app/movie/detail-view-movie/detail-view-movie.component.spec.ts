import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewMovieComponent } from './detail-view-movie.component';

describe('DetailViewMovieComponent', () => {
  let component: DetailViewMovieComponent;
  let fixture: ComponentFixture<DetailViewMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

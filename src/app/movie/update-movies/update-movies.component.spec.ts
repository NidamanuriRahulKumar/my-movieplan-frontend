import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMoviesComponent } from './update-movies.component';

describe('UpdateMoviesComponent', () => {
  let component: UpdateMoviesComponent;
  let fixture: ComponentFixture<UpdateMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

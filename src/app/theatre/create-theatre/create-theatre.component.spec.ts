import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTheatreComponent } from './create-theatre.component';

describe('CreateTheatreComponent', () => {
  let component: CreateTheatreComponent;
  let fixture: ComponentFixture<CreateTheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTheatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

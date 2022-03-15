import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTheatreComponent } from './update-theatre.component';

describe('UpdateTheatreComponent', () => {
  let component: UpdateTheatreComponent;
  let fixture: ComponentFixture<UpdateTheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTheatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

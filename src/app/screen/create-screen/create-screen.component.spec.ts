import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScreenComponent } from './create-screen.component';

describe('CreateScreenComponent', () => {
  let component: CreateScreenComponent;
  let fixture: ComponentFixture<CreateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

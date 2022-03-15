import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateScreensComponent } from './update-screens.component';

describe('UpdateScreensComponent', () => {
  let component: UpdateScreensComponent;
  let fixture: ComponentFixture<UpdateScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

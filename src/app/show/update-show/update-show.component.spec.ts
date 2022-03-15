import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShowComponent } from './update-show.component';

describe('UpdateShowComponent', () => {
  let component: UpdateShowComponent;
  let fixture: ComponentFixture<UpdateShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

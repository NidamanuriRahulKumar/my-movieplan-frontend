import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiViewShowComponent } from './detai-view-show.component';

describe('DetaiViewShowComponent', () => {
  let component: DetaiViewShowComponent;
  let fixture: ComponentFixture<DetaiViewShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaiViewShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaiViewShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

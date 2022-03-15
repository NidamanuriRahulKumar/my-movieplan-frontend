import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewScreenComponent } from './detail-view-screen.component';

describe('DetailViewScreenComponent', () => {
  let component: DetailViewScreenComponent;
  let fixture: ComponentFixture<DetailViewScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

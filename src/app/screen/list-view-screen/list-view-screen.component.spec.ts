import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewScreenComponent } from './list-view-screen.component';

describe('ListViewScreenComponent', () => {
  let component: ListViewScreenComponent;
  let fixture: ComponentFixture<ListViewScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

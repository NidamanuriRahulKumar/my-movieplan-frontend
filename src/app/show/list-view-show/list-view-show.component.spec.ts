import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewShowComponent } from './list-view-show.component';

describe('ListViewShowComponent', () => {
  let component: ListViewShowComponent;
  let fixture: ComponentFixture<ListViewShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

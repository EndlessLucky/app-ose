import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardView } from './dashboard.view';

describe('DashboardView', () => {
  let component: DashboardView;
  let fixture: ComponentFixture<DashboardView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsTableComponent } from './workshops-table.component';

describe('WorkshopsTableComponent', () => {
  let component: WorkshopsTableComponent;
  let fixture: ComponentFixture<WorkshopsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

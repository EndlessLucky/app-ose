import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopDeleteModalComponent } from './workshop-delete-modal.component';

describe('WorkshopDeleteModalComponent', () => {
  let component: WorkshopDeleteModalComponent;
  let fixture: ComponentFixture<WorkshopDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

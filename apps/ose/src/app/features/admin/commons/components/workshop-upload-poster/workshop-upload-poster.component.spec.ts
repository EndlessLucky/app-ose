import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopUploadPosterComponent } from './workshop-upload-poster.component';

describe('WorkshopUploadPosterComponent', () => {
  let component: WorkshopUploadPosterComponent;
  let fixture: ComponentFixture<WorkshopUploadPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopUploadPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopUploadPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

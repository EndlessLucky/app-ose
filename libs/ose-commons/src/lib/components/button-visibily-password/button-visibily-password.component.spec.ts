import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVisibilyPasswordComponent } from './button-visibily-password.component';

describe('ButtonVisibilyPasswordComponent', () => {
  let component: ButtonVisibilyPasswordComponent;
  let fixture: ComponentFixture<ButtonVisibilyPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonVisibilyPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonVisibilyPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

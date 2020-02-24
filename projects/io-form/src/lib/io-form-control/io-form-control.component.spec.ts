import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoFormControlComponent } from './io-form-control.component';

describe('IoFormControlComponent', () => {
  let component: IoFormControlComponent;
  let fixture: ComponentFixture<IoFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

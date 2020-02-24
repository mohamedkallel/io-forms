import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoFormArrayComponent } from './io-form-array.component';

describe('IoFormArrayComponent', () => {
  let component: IoFormArrayComponent;
  let fixture: ComponentFixture<IoFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoFormGroupComponent } from './io-form-group.component';

describe('IoFormGroupComponent', () => {
  let component: IoFormGroupComponent;
  let fixture: ComponentFixture<IoFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

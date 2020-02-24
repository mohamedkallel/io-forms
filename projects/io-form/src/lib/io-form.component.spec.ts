import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoFormComponent } from './io-form.component';

describe('IoFormComponent', () => {
  let component: IoFormComponent;
  let fixture: ComponentFixture<IoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

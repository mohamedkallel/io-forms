import { TestBed } from '@angular/core/testing';

import { IoFormService } from './io-form.service';

describe('IoFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IoFormService = TestBed.get(IoFormService);
    expect(service).toBeTruthy();
  });
});

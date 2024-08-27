import { TestBed } from '@angular/core/testing';

import { TaxCodeService } from './tax-code.service';

describe('TaxCodeService', () => {
  let service: TaxCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

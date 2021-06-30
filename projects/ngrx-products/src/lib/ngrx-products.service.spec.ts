import { TestBed } from '@angular/core/testing';

import { NgrxProductsService } from './ngrx-products.service';

describe('NgrxProductsService', () => {
  let service: NgrxProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NgrxCategoriesService } from './ngrx-categories.service';

describe('NgrxCategoriesService', () => {
  let service: NgrxCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

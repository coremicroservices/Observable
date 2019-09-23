import { TestBed } from '@angular/core/testing';

import { ObservablesvcService } from './observablesvc.service';

describe('ObservablesvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservablesvcService = TestBed.get(ObservablesvcService);
    expect(service).toBeTruthy();
  });
});

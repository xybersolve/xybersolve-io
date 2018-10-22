import { TestBed } from '@angular/core/testing';

import { PhotographyService } from './photography.service';

describe('PhotographyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotographyService = TestBed.get(PhotographyService);
    expect(service).toBeTruthy();
  });
});

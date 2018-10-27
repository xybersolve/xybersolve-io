import { TestBed, async, inject } from '@angular/core/testing';

import { PhotographyDetailGuard } from './photography-detail.guard';

describe('PhotographyDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotographyDetailGuard]
    });
  });

  it('should ...', inject([PhotographyDetailGuard], (guard: PhotographyDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});

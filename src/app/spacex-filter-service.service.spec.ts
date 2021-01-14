import { TestBed } from '@angular/core/testing';

import { SpacexFilterServiceService } from './spacex-filter-service.service';

describe('SpacexFilterServiceService', () => {
  let service: SpacexFilterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexFilterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

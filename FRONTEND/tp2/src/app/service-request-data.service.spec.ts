import { TestBed } from '@angular/core/testing';

import { ServiceRequestDataService } from './service-request-data.service';

describe('ServiceRequestDataService', () => {
  let service: ServiceRequestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRequestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

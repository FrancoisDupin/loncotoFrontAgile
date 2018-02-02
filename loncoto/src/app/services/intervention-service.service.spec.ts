import { TestBed, inject } from '@angular/core/testing';

import { InterventionServiceService } from './intervention-service.service';

describe('InterventionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterventionServiceService]
    });
  });

  it('should be created', inject([InterventionServiceService], (service: InterventionServiceService) => {
    expect(service).toBeTruthy();
  }));
});

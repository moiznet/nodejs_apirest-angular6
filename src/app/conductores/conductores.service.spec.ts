import { TestBed, inject } from '@angular/core/testing';

import { ConductoresService } from './conductores.service';

describe('ConductoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConductoresService]
    });
  });

  it('should be created', inject([ConductoresService], (service: ConductoresService) => {
    expect(service).toBeTruthy();
  }));
});
